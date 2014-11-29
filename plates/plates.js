var fs = require('fs');
var Plates = require('plates');
var compiled;
var tplData;



module.exports.prepare = function (data, done) {
    var str = fs.readFileSync(__dirname + '/tpl_escaped.plates', 'utf8');
    tplData = data;
    compiled = Plates.bind(str, tplData);
    done();
};

module.exports.prepareUnescaped = function (data, done) {
    var str = fs.readFileSync(__dirname + '/tpl_unescaped.plates', 'utf8');
    tplData = data;
    compiled = Plates.bind(str, tplData);
    done();
};

module.exports.step = function (done) {
    var html = compiled;
    done(undefined, html);
};