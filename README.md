# Node.JS template engines benchmark

## Note

- weakness of this test: it does not verify the output for correctness

## Engines as of 2016/04/12

- ant.js v0.2.2
- art-template v3.0.3
- bh v4.2.1
- blueimp-tmpl v3.7.0
- [CoffeeKup](https://github.com/mauricemach/coffeekup) v0.3.1 ([website](http://coffeekup.org/))
- [doT](https://github.com/olado/doT) v1.1.1 ([website](http://olado.github.com/doT/))
- [Dust](https://github.com/linkedin/dustjs) v2.7.4 ([website](http://linkedin.github.com/dustjs/))
- [Eco](https://github.com/sstephenson/eco) v1.0.3
- [ECT](https://github.com/baryshev/ect) v1.0.0 ([website](http://ectjs.com/))
- [EJS](https://github.com/visionmedia/ejs) v2.5.3
- egs v0.3.1
- [Fest](https://github.com/mailru/fest) v0.12.1
- [Gaikan](https://github.com/Deathspike/gaikan) v2.0.2
- [Handlebars.js](https://github.com/wycats/handlebars.js/) v4.0.6 ([website](http://handlebarsjs.com/))
- [Hogan.js](https://github.com/twitter/hogan.js) v3.0.2 ([website](http://twitter.github.com/hogan.js/))
- htmling v0.0.7
- [Jade](https://github.com/visionmedia/jade) v1.11.0 ([website](http://jade-lang.com/))
- kendo-ui-core v2016.3.1118
- lodash v4.17.2
- nunjucks v3.0.0
- plates v0.4.11
- [Pug](https://github.com/pugjs/pug) v0.1.0 ([website](https://pugjs.org/))
- slm v0.6.0
- [Swig](https://github.com/paularmstrong/swig) v1.4.2
- [Underscore](https://github.com/documentcloud/underscore) v1.8.3 ([website](http://underscorejs.org/))

## Engines as of 2019/07/29

	art-template: 3.1.3
	bh: 4.2.1
	blueimp-tmpl: 3.7.0
	coffeekup: 0.3.1
	domly: 0.0.9
	dot: 1.1.1
	dustjs-linkedin: 2.7.5
	eco: 1.1.0-rc-3
	ect: 1.0.0
	egs: 0.3.1
	ejs: 2.5.5
	fast-react-render: 1.2.2
	fast-react-server: 1.3.0
	fest: 0.12.1
	fte.js: 0.4.7
	gaikan: 2.0.2
	handlebars: 4.0.6
	hogan.js: 3.0.2
	htmling: 0.0.8
	jade: 1.11.0
	jsdom: 9.9.1
	jsdom-global: 2.1.1
	kendo-ui-core: 2019.2.724
	lodash: 4.17.4
	marko: 3.14.0
	nai: 0.1.2
	nunjucks: 3.0.0
	plates: 0.4.11
	pug: 2.0.0-beta6
	react: 15.4.2
	react-dom: 15.4.2
	slm: 0.6.0
	swig: 1.4.2
	underscore: 1.8.3

## Test environment as of 2019/07/29

- CPU: Intel Core i7-2675QM 2.2Ghz 8GB 
- OS: Windows 10 Pro 64-Bit
- Node.JS version: 10.16.0

## Results as of 2019/07/29

** removed dot dustjs-linkedin jade htmling domly swig due to bugs **	
** removed eco egs fte.js jsdom kendo-ui react fast-react due to breaking changes **
** TODO: jsrender template7 squirrelly twig **

	Performance report for 10000 templates (win32):

	plates               (    2ms) - fastest
	Gaikan               (    4ms) - 100% slower
	ECT                  (   16ms) - 700% slower
	Fest                 (  172ms) - 8500% slower
	blueimp-tmpl         (  191ms) - 9450% slower
	Slm                  (  243ms) - 12050% slower
	marko                (  249ms) - 12350% slower
	EJS without `with`   (  284ms) - 14100% slower
	Handlebars.js        (  291ms) - 14450% slower
	Hogan.js             (  358ms) - 17800% slower
	nai                  (  410ms) - 20400% slower
	Underscore           (  448ms) - 22300% slower
	lodash               (  474ms) - 23600% slower
	Pug without `with`   (  521ms) - 25950% slower
	Pug                  (  533ms) - 26550% slower
	BH                   (  601ms) - 29950% slower
	Nunjucks             (  740ms) - 36900% slower
	CoffeeKup            (  821ms) - 40950% slower
	EJS                  (  883ms) - 44050% slower
	artTemplate          ( 1293ms) - 64550% slower

## Usage

	git clone https://github.com/HansHammel/template-benchmark.git
	cd template-benchmark
	npm install
	node ./benchmark.js

[![Dependency Status](https://david-dm.org/HansHammel/template-benchmark.svg)](https://david-dm.org/HansHammel/template-benchmark) [![Greenkeeper badge](https://badges.greenkeeper.io/HansHammel/template-benchmark.svg)](https://greenkeeper.io/)
