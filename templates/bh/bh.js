var compiled;
var tplData;

module.exports.prepare = function (data, done) {
    tplData = require('./bemjson.js')(data);
    compiled = require('./matchers.js');
    done();
};

module.exports.prepareUnescaped = function (data, done) {
    tplData = require('./bemjson.js')(data);
    compiled = require('./matchers.js');
    done();
};

module.exports.step = function (done) {
    var html = compiled.apply(tplData);
    done(undefined, html);
};
