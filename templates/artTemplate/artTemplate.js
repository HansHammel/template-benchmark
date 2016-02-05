var fs = require('fs');
var renderer = require('art-template');
var tplData;
var tpl;

renderer.config('base', __dirname);
renderer.config('extname', '.htm');
renderer.config('encoding', 'utf-8');

module.exports.prepare = function (data, done) {
    var str = fs.readFileSync(__dirname + '/tpl_escaped.htm', 'utf8');
    tplData = data;
    tpl = 'tpl_escaped.htm';
    compiled = renderer.compile(str);
    done();
};

module.exports.prepareUnescaped = function (data, done) {
    var str = fs.readFileSync(__dirname + '/tpl_unescaped.htm', 'utf8');

    tplData = data;
    compiled = renderer.compile(str);
    done();
};

module.exports.step = function (done) {
    var html = compiled(tplData);
    done(undefined, html);
};


//var data = require('../data');
//module.exports.prepareUnescaped(data, function(){module.exports.step(function(a, html){console.log(html);})});