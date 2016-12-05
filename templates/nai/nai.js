var fs = require('fs');
var nai = require('nai');
var compiled;
var tplData;

module.exports.prepare = function (data, done) {
	var str = fs.readFileSync(__dirname + '/tpl_escaped.nai', 'utf8');
	tplData = data;
	compiled = nai.compile(str);
	done();
};

module.exports.prepareUnescaped = function (data, done) {
	var str = fs.readFileSync(__dirname + '/tpl_unescaped.nai', 'utf8');
	tplData = data;
	compiled = nai.compile(str);
	done();
};

module.exports.step = function (done) {
	compiled(tplData).then(function(html){
     done(undefined, html);   
    });
};