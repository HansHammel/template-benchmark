var data = require('./data');
var fs = require('fs');
var path = require('path');
var os = require('os');

var count = 10000;

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
			fs.writeFileSync(path.join('comp',name+'.html'),html);
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
			fs.writeFileSync(path.join('comp',name+'.unescaped.html'),html);
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

//disabled: uses deprecated contextify -> build failing on travis
// removed     "ant.js": "^0.2.2", from package.json
//var ant = './templates/antjs/ant.js';
//var antSet = './templates/antjs/ant.set.js';

var artTemplate = './templates/artTemplate/artTemplate.js';
var bh = './templates/bh/bh.js';
var bt = './templates/bt/bt.js';
var coffeekup = './templates/coffeekup/coffeekup.js';
var dot = './templates/dot/dot.js';
var dust = './templates/dust/dust.js';
var eco = './templates/eco/eco.js';
var ect = './templates/ect/ect.js';
//var egs = './templates/egs/egs.js';
var ejs = './templates/ejs/ejs.js';
var ejsWithoutWith = './templates/ejs-without-with/ejs.js';
var fest = './templates/fest/fest.js';
var gaikan = './templates/gaikan/gaikan.js';
var handlebars = './templates/handlebars/handlebars.js';
var hogan = './templates/hogan/hogan.js';
var htmling = './templates/htmling/htmling.js';
var jade = './templates/jade/jade.js';
var pug = './templates/pug/pug.js';
var jadeWithoutWith = './templates/jade-without-with/jade.js';
var pugWithoutWith = './templates/pug-without-with/pug.js';
//var kendo = './templates/kendo-ui/with.js';
//var kendoWithoutWith = './templates/kendo-ui/nowith.js';
var lodash = './templates/lodash/lodash.js';
var nunjucks = './templates/nunjucks/nunjucks.js';
var plates = './templates/plates/plates.js';
//var reactive = "./templates/reactive/reactive.js"; //package and deps are broken
var slm = './templates/slm/slm';
var swig = './templates/swig/swig.js';
var tmpl = "./templates/tmpl/tmpl.js";
var underscore = './templates/underscore/underscore.js';
var react = './templates/react/react.js';
//var marko = './templates/marko/marko.js';
//var domly = './templates/domly/domly.js';
var ftejs = './templates/fte.js/fte.js';
//disabled: on trvis not found removed     "tangular": "^1.8.0",
//var tangular = './templates/tangular/tangular.js';
var nai = './templates/nai/nai.js';
var fastreact = './templates/fast-react/fast-react.js';

var samples = [
	//{name: 'Ant.js `.set`', sample: require(antSet)},
	//{name: 'Ant.js', sample: require(ant)},
	{name: 'artTemplate', sample: require(artTemplate)},
	{name: 'BH', sample: require(bh)},
	{name: 'blueimp-tmpl', sample : require(tmpl)},
	//{name: 'BT', sample: require(bt)}, // breakts the test results
	{name: 'CoffeeKup', sample : require(coffeekup)},
	{name: 'doT', sample : require(dot)},
	{name: 'Dust', sample : require(dust)},
    //{name: 'marko', sample : require(marko)},
    //{name: 'domly', sample : require(domly)},
	//{name: 'Eco', sample : require(eco)},
	{name: 'ECT', sample: require(ect)},
	//{name: 'EGS', sample: require(egs)},
	{name: 'EJS without `with`', sample : require(ejsWithoutWith)},
	{name: 'EJS', sample : require(ejs)},
	{name: 'Fest', sample : require(fest)},
    //{name: 'fTE.js', sample : require(ftejs)},
	{name: 'Gaikan', sample: require(gaikan)},
	{name: 'Handlebars.js', sample : require(handlebars)},
	{name: 'Hogan.js', sample : require(hogan)},
	{name: 'HTMLing', sample: require(htmling)},
	{name: 'Jade without `with`', sample : require(jadeWithoutWith)},
	{name: 'Jade', sample : require(jade)},
	//{name: 'Kendo UI no `with`', sample: require(kendoWithoutWith)},
	//{name: 'Kendo UI', sample: require(kendo)},
	{name: 'lodash', sample: require(lodash)},
    {name: 'nai', sample: require(nai)},  // deprecation warning poluting results
	{name: 'Nunjucks', sample: require(nunjucks)},
	{name: 'plates', sample: require(plates)},
    {name: 'Pug without `with`', sample : require(pugWithoutWith)},
    {name: 'Pug', sample : require(pug)},
    {name: 'react', sample: require(react)},
	//{name: 'reactive.js', sample: require(reactive)},
	{name: 'Slm', sample: require(slm)},
	{name: 'Swig', sample : require(swig)},
    //{name: 'Tangular', sample: require(tangular)},
	{name: 'Underscore', sample : require(underscore)},
    {name: 'fast-react', sample : require(fastreact)}
];

var results = [];
var pad = function (val, num, pre) {
	val = typeof val === 'string' ? val : '' + val;
	while (val.length < num) val = (pre ? ' ' : '') + val + (pre ? '' : ' ');
	return val;
};
var runTests = function (loops) {
	count = loops || count;
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



if (!module.parent) {
    console.log('Rendering ' + count + ' templates:'+os.EOL);
    runTests();
}

module.exports = {
    runTests: runTests
}
