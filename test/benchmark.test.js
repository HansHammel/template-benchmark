var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
chai.should();
var sinon  = require("sinon");
var fs = require('fs');
var path = require('path');
var os = require('os');

//use sinon or this hook
function captureStream(stream){
    var oldWrite = stream.write;
    var buf = '';
    stream.write = function(chunk, encoding, callback){
        buf += chunk.toString(); // chunk is a String or Buffer
        oldWrite.apply(stream, arguments);
    };

    return {
        unhook: function unhook(){
            stream.write = oldWrite;
        },
        captured: function(){
            return buf;
        }
    };
}

function hook(callback){

    var oldWrite = process.stdout.write;
    var output = { str : '' };

    return {
        restore : function(){
            process.stdout.write = oldWrite;
            return this;
        },
        disable : function(){
            var self = this;
            process.stdout.write = (function(){
                return function(str, enc, fd){
                    callback.call(self, output, { str : str, enc : enc, fd : fd });
                };
            })();
            return this;
        },
        enable : function(){
            var self = this;
            process.stdout.write = (function(write){
                return function(str, enc, fd){
                    write.apply(process.stdout, arguments);
                    callback.call(self, output, { str : str, enc : enc, fd : fd });
                };
            })(oldWrite);
        },
        output : function(){
            return output;
        },
        str : function(){
            return this.output().str;
        },
        clean : function(){
            output = { str : '' };
            return this;
        },
        reset : function(){
            return this.disable().clean().enable();
        }
    };
}

var stdout = hook(function(output, obj){
    output.str += obj.str;
});

describe('ensure benchmark is running successfully', function(){
    this.timeout(120000);
    beforeEach(function(){
        sinon.stub(console, "log").returns(void 0);
        sinon.stub(console, "error").returns(void 0);
    });
    afterEach(function(){
        console.log.restore();
        console.error.restore();
    });
    it('should print out some stuff', function(done){
        require('../benchmark.js').runTests(1);
        assert.isTrue(console.log.called, "log should have been called");
        assert.isFalse(console.log.calledOnce, "not only once");
        assert.equal(console.log.callCount, 30, "but many times");
        //expect(console.log.getCall(0).args[0]).to.equal("ABC");
        //expect(console.log.getCall(1).args[0]).to.equal("123");
        //expect(console.log.args[2][0]).to.equal("CBA");
        //expect(console.log.args[3][0]).to.equal("321");
        done();
    });
});

describe('ensure benchmark has no error or deprecation warnings', function(){
    this.timeout(120000);
    //var hook;
    beforeEach(function(){
        stdout.disable();
        //hook = captureStream(process.stdout);
        //console.log = function(){};
    });
    afterEach(function(){
        stdout.enable();
        //hook.unhook();
        //delete console.log;
    });
    it('should have no errors or deprecation warnings', function(done){
        require('../benchmark.js').runTests(1);
        var o = stdout.str();

        assert.isFalse(/error/i.test(o), 'should not print errors');
        assert.isFalse(/deprecat/i.test(o), 'should not print deprecation warnings');

        //assert.isFalse(/error/i.test(hook.captured()), 'should not print errors');
        //assert.isFalse(/deprecat/i.test(hook.captured()), 'should not print deprecation warnings');
        done();
    });
});