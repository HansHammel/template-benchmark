var Factory = require('fte.js').Factory;

var comp = new Factory({
    root: 'fte.js',
    debug:true,
});

var tpl_esc = require('./tpl_escaped.nhtml.js');
var tpl_uesc = require('./tpl_unescaped.nhtml.js');

var compiled;
var tplData;

module.exports.prepare = function (data, done) {
	tplData = data;
	// compiled = 'tpl_escaped.nhtml';
	// comp.run(data, compiled);
	compiled = tpl_esc;
	done();
};

module.exports.prepareUnescaped = function (data, done) {
	tplData = data;
	// compiled = 'tpl_unescaped.nhtml';
	// comp.run(data, compiled);
	compiled = tpl_uesc;
	done();
};

module.exports.step = function (done) {
	var html = compiled(tplData);
	// var html = comp.run(tplData, compiled);
	done(undefined, html);
};