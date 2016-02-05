var kendo = require('./kendo.js');
var fs = require('fs');
var path = require('path');
var compiled;
var tplData;

module.exports.prepare = function (data, done) {
    var escaped = fs.readFileSync(path.resolve(__dirname, './with/tpl_escaped.html')).toString();

    tplData = data;

    compiled = kendo.template(escaped);

    done();
};

module.exports.prepareUnescaped = function (data, done) {
    var unescaped = fs.readFileSync(path.resolve(__dirname, './with/tpl_unescaped.html')).toString();

    tplData = data;

    compiled = kendo.template(unescaped);

    done();
};

module.exports.step = function (done) {
    var html = compiled(tplData);

    done(undefined, html);
};
