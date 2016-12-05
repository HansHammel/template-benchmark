var marko = require('marko');
var compiled;
var tplData;

module.exports.prepare = function (data, done) {
	tplData = data;
	compiled = marko.load(__dirname + '/tpl_escaped.html');
	done();
};

module.exports.prepareUnescaped = function (data, done) {
  tplData = data;
	compiled = marko.load(__dirname + '/tpl_unescaped.html');
	done();
};

module.exports.step = function (done) {
	var html = compiled.renderSync(tplData);
	done(undefined, html);
};
