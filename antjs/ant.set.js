var fs = require('fs');
var Ant = require('ant.js');
var ant;
var tplData;

module.exports.prepare = function (data, done) {
    var str = fs.readFileSync(__dirname + '/tpl_escaped.ajs', 'utf8');
    tplData = data;
    ant = new Ant(str, {data: {}});
    done();
};

module.exports.prepareUnescaped = function (data, done) {
    var str = fs.readFileSync(__dirname + '/tpl_unescaped.ajs', 'utf8');
    tplData = data;
    ant = new Ant(str, {data: {}});
    done();
};

module.exports.step = function (done) {
    var html = ant.set(tplData).innerHTML;
    done(undefined, html);
};