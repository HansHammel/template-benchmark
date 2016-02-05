var nunjucks = require('nunjucks');
var fs = require('fs');
var compiled;
var tplData;

nunjucks.configure(__dirname);

module.exports.prepare = function (data, done) {
    tplData = data;
    var string = String(fs.readFileSync(__dirname + '/tpl_escaped.nunjucks'));
    compiled = nunjucks.compile(string);
    done();
};

module.exports.prepareUnescaped = function (data, done) {
    tplData = data;
    var string = String(fs.readFileSync(__dirname + '/tpl_unescaped.nunjucks'));
    compiled = nunjucks.compile(string);
    done();
};

module.exports.step = function (done) {
    var html = compiled.render(tplData);
    done(undefined, html);
};
