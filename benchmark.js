var data = require('./data');

var count = 100000;
//var count = 1000;
var fs=require('fs');

var ant = require('./templates/antjs/ant.js');
var antSet = require('./templates/antjs/ant.set.js');
var artTemplate = require('./templates/artTemplate/artTemplate.js');
var bh = require('./templates/bh/bh.js');
var bt = require('./templates/bt/bt.js');
var coffeekup = require('./templates/coffeekup/coffeekup.js');
var dot = require('./templates/dot/dot.js');
var dust = require('./templates/dust/dust.js');
var eco = require('./templates/eco/eco.js');
var ect = require('./templates/ect/ect.js');
//var egs = require('./templates/egs/egs.js');
var ejs = require('./templates/ejs/ejs.js');
var ejsWithoutWith = require('./templates/ejs-without-with/ejs.js');
var fest = require('./templates/fest/fest.js');
var gaikan = require('./templates/gaikan/gaikan.js');
var handlebars = require('./templates/handlebars/handlebars.js');
var hogan = require('./templates/hogan/hogan.js');
var htmling = require('./templates/htmling/htmling.js');
var jade = require('./templates/jade/jade.js');
var pug = require('./templates/pug/pug.js');
var jadeWithoutWith = require('./templates/jade-without-with/jade.js');
var pugWithoutWith = require('./templates/pug-without-with/pug.js');
//var kendo = require('./templates/kendo-ui/with.js');
//var kendoWithoutWith = require('./templates/kendo-ui/nowith.js');
var lodash = require('./templates/lodash/lodash.js');
var nunjucks = require('./templates/nunjucks/nunjucks.js');
var plates = require('./templates/plates/plates.js');
//var reactive = require("./templates/reactive/reactive.js"); //package and deps are broken
var slm = require('./templates/slm/slm');
var swig = require('./templates/swig/swig.js');
var tmpl = require("./templates/tmpl/tmpl.js");
var underscore = require('./templates/underscore/underscore.js');

/*
todo:
 "enb": "*",
 "enb-bt": "*",
 "domjs": "*",
 "icanhaz": "*",
 "jqtpl": "*",
 "jquery": "*",
 "jsdom-nogyp": "*",
 "razor-tmpl": "*",
 "transparency": "*",
 "xtemplate": "*",
 "xtpl": "*"
 */

var test = function(name, sample, cb) {
	var i = 0;
	var start;
	var done = function(error, html) {
		i++;
		if (i === count) {
			var now = Date.now();
			cb(null, name, now - start);
		}
	};
	sample.prepare(data, function() {
		//run once to store the output for validation before we start measuring
		sample.step(function(undef, html){
			fs.writeFileSync('comp/'+name+'.html',html);
			start = Date.now();
			for (var j = 0; j < count; j++) {
				sample.step(done);
			}
		});
		/*
		 start = Date.now();
		 for (var j = 0; j < count; j++) {
		 sample.step(done);
		 }
		*/
	});
};

var testUnescaped = function(name, sample, cb) {
	var i = 0;
	var start;
	var done = function(error, html) {
		i++;
		if (i === count) {
			var now = Date.now();
			cb(null, name, now - start);
		}
	};
	sample.prepareUnescaped(data, function() {
		sample.step(function(undef, html){
			fs.writeFileSync('comp/'+name+'.unescaped.html',html);
			start = Date.now();
			for (var j = 0; j < count; j++) {
				sample.step(done);
			}
		});
		/*
		start = Date.now();
		for (var j = 0; j < count; j++) {
			sample.step(done);
		}
		*/
	});
};

var samples = [
	{name: 'Ant.js `.set`', sample: antSet},
	{name: 'Ant.js', sample: ant},
	{name: 'artTemplate', sample: artTemplate},
	{name: 'BH', sample: bh},
	{name: 'BT', sample: bt},
	{name: 'CoffeeKup', sample : coffeekup},
	{name: 'doT', sample : dot},
	{name: 'Dust', sample : dust},
	//{name: 'Eco', sample : eco},
	{name: 'ECT', sample: ect},
	//{name: 'EGS', sample: egs},
	{name: 'EJS without `with`', sample : ejsWithoutWith},
	{name: 'EJS', sample : ejs},
	{name: 'Fest', sample : fest},
	{name: 'Gaikan', sample: gaikan},
	{name: 'Handlebars.js', sample : handlebars},
	{name: 'Hogan.js', sample : hogan},
	{name: 'HTMLing', sample: htmling},
	{name: 'Jade without `with`', sample : jadeWithoutWith},
	{name: 'Jade', sample : jade},
    {name: 'Pug without `with`', sample : pugWithoutWith},
    {name: 'Pug', sample : pug},
	//{name: 'Kendo UI no `with`', sample: kendoWithoutWith},
	//{name: 'Kendo UI', sample: kendo},
	{name: 'lodash', sample: lodash},
	{name: 'Nunjucks', sample: nunjucks},
	{name: 'plates', sample: plates},
	//{name: 'reactive.js', sample: reactive},
	{name: 'Slm', sample: slm},
	{name: 'Swig', sample : swig},
	{name: 'blueimp-tmpl', sample : tmpl},
	{name: 'Underscore', sample : underscore}
];

var results = [];
var pad = function (val, num, pre) {
	val = typeof val === 'string' ? val : '' + val;
	while (val.length < num) val = (pre ? ' ' : '') + val + (pre ? '' : ' ');
	return val;
};
var runTests = function () {
	if (samples.length) {
		var sample = samples.pop();
		test(sample.name, sample.sample, function (err, name, result) {
			testUnescaped(sample.name, sample.sample, function (err, name, resultUnescaped) {
				console.log(name);
				console.log('  Escaped   : ' + result + 'ms');
				console.log('  Unescaped : ' + resultUnescaped + 'ms');
				console.log('  Total     : ' + (result + resultUnescaped) + 'ms');
				console.log('');
				results.push({
					name: name,
					escaped: result,
					unescaped: resultUnescaped,
					total: result + resultUnescaped
				});
				runTests();
			});
		});
	} else {
		console.log('Performance report for ' + count + ' templates (' + process.platform + '):\n');
		results.sort(function (a, b) {
			var x = a.total;
			var y = b.total;
			return x < y ? -1 : (x > y ? 1 : 0);
		});
		var fastest = results[0].total;
		for (var i = 0; i < results.length; i += 1) {
			var result = results[i];
			var percentage = Math.round((100 / fastest * result.total) - 100);
			console.log(pad(result.name, 20) +
			' (' + pad(result.total, 5, true) + 'ms)' +
			(i == 0 ? ' - fastest' : ' - ' + percentage + '% slower'));
		}
	}
};

console.log('Rendering ' + count + ' templates:\n');
runTests();
