var fs = require('fs');
var tmpl = require("blueimp-tmpl");
var compiled;
var tplData;

module.exports.prepare = function (data, done) {
	var str = fs.readFileSync(__dirname + '/tpl_escaped.tmpl', 'utf8');
	tplData = data;
	compiled = tmpl.tmpl(str);
	done();
};

module.exports.prepareUnescaped = function (data, done) {
	var str = fs.readFileSync(__dirname + '/tpl_unescaped.tmpl', 'utf8');
	tplData = data;
	compiled = tmpl.tmpl(str);
	done();
};

module.exports.step = function (done) {
	var html = compiled(tplData);
	done(undefined, html);
};