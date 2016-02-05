var fs = require('fs');
var reactive = require('reactive');
var compiled;
var tplData;

module.exports.prepare = function (data, done) {
	var str = fs.readFileSync(__dirname + '/tpl_escaped.reactive', 'utf8');
	tplData = data;
	compiled = reactive.Reactive(str);
	done();
};

module.exports.prepareUnescaped = function (data, done) {
	var str = fs.readFileSync(__dirname + '/tpl_unescaped.reactive', 'utf8');
	tplData = data;
	compiled = reactive.Reactive(str);
	done();
};

module.exports.step = function (done) {
	var html = compiled(tplData);
	done(undefined, html);
};