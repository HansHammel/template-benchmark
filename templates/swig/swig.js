var swig = require('swig');
var compiled;
var tplData;

/*
swig.init({
	root: __dirname
});
 */
swig.setDefaults({loader: swig.loaders.fs(__dirname)});

module.exports.prepare = function (data, done) {
	tplData = data;
	compiled = swig.compileFile('./tpl_escaped.swig');
	done();
};

module.exports.prepareUnescaped = function (data, done) {
	tplData = data;
	compiled = swig.compileFile('./tpl_unescaped.swig');
	done();
};

module.exports.step = function (done) {
	var html = compiled(tplData);
	done(undefined, html);
};
