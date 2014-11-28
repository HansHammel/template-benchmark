# Node.JS template engines benchmark

## Engines

- [CoffeeKup](https://github.com/mauricemach/coffeekup) v0.3.1 ([website](http://coffeekup.org/))
- [doT](https://github.com/olado/doT) v1.0.1 ([website](http://olado.github.com/doT/))
- [Dust](https://github.com/linkedin/dustjs) v1.2.1 ([website](http://linkedin.github.com/dustjs/))
- [Eco](https://github.com/sstephenson/eco) v1.1.0-rc-3
- [ECT](https://github.com/baryshev/ect) v0.4.8 ([website](http://ectjs.com/))
- [EJS](https://github.com/visionmedia/ejs) v0.8.3
- [Fest](https://github.com/mailru/fest) v0.5.4
- [Gaikan](https://github.com/Deathspike/gaikan) v1.3.4
- [Handlebars.js](https://github.com/wycats/handlebars.js/) v1.0.9 ([website](http://handlebarsjs.com/))
- [Hogan.js](https://github.com/twitter/hogan.js) v2.0.0 ([website](http://twitter.github.com/hogan.js/))
- [Jade](https://github.com/visionmedia/jade) v0.28.1 ([website](http://jade-lang.com/))
- [Swig](https://github.com/paularmstrong/swig) v0.13.5
- [Underscore](https://github.com/documentcloud/underscore) v1.4.4 ([website](http://underscorejs.org/))

## Test environment

- CPU: Intel Core i7-2675QM 2.2Ghz 8GB 
- OS: Windows 7 Pro 64-Bit
- Node.JS version: 0.10.33

## Results

	Performance report for 100000 templates (win32):
	
	Gaikan               ( 1645ms) - fastest
	HTMLing              ( 1966ms) - 20% slower
	Fest                 ( 2000ms) - 22% slower
	doT                  ( 2561ms) - 56% slower
	Handlebars.js        ( 2563ms) - 56% slower
	artTemplate          ( 2743ms) - 67% slower
	Underscore           ( 3802ms) - 131% slower
	EGS                  ( 3979ms) - 142% slower
	Slm                  ( 4008ms) - 144% slower
	ECT                  ( 4084ms) - 148% slower
	Hogan.js             ( 5462ms) - 232% slower
	Kendo UI no `with`   ( 5519ms) - 236% slower
	Ant.js `.set`        ( 5927ms) - 260% slower
	Dust                 ( 6036ms) - 267% slower
	Jade without `with`  ( 6198ms) - 277% slower
	EJS without `with`   ( 6295ms) - 283% slower
	Swig                 ( 6851ms) - 316% slower
	Eco                  ( 8330ms) - 406% slower
	Kendo UI             ( 8395ms) - 410% slower
	EJS                  ( 8596ms) - 423% slower
	Jade                 ( 9818ms) - 497% slower
	BH                   (10013ms) - 509% slower
	CoffeeKup            (10499ms) - 538% slower
	BT                   (26059ms) - 1484% slower
	Ant.js               (33208ms) - 1919% slower

## Usage

	git clone https://github.com/HansHammel/template-benchmark.git
	cd template-benchmark
	npm install
	node ./benchmark.js
