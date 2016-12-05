var Factory = require('fte.js').Factory;

var comp = new Factory({
    root: 'fte.js',
    debug:true,
});

var compiled;
var tplData;

module.exports.prepare = function (data, done) {
	tplData = data;
	compiled = 'tpl_escaped.nhtml';
	comp.run(data, compiled);
	done();
};

module.exports.prepareUnescaped = function (data, done) {
	tplData = data;
	compiled = 'tpl_unescaped.nhtml';
	comp.run(data, compiled);
	done();
};

module.exports.step = function (done) {
	var html = comp.run(tplData, compiled);
	done(undefined, html);
};