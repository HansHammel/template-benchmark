# Node.JS template engines benchmark

## Note

- weakness of this test: it does not verify the output for correctness

## Engines

not up to date

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
	
	Gaikan               ( 1605ms) - fastest
	HTMLing              ( 1935ms) - 21% slower
	Fest                 ( 1956ms) - 22% slower
	blueimp-tmpl         ( 2035ms) - 27% slower
	artTemplate          ( 2402ms) - 50% slower
	doT                  ( 2417ms) - 51% slower
	Handlebars.js        ( 2575ms) - 60% slower
	EGS                  ( 4025ms) - 151% slower
	ECT                  ( 4060ms) - 153% slower
	Slm                  ( 4163ms) - 159% slower
	Underscore           ( 4246ms) - 165% slower
	lodash               ( 4393ms) - 174% slower
	Hogan.js             ( 5439ms) - 239% slower
	Kendo UI no `with`   ( 5494ms) - 242% slower
	Nunjucks             ( 5930ms) - 269% slower
	Dust                 ( 6059ms) - 278% slower
	EJS without `with`   ( 6305ms) - 293% slower
	Jade without `with`  ( 6348ms) - 296% slower
	Ant.js `.set`        ( 6727ms) - 319% slower
	Swig                 ( 7284ms) - 354% slower
	Eco                  ( 9218ms) - 474% slower
	EJS                  ( 9398ms) - 486% slower
	Kendo UI             ( 9420ms) - 487% slower
	Jade                 ( 9472ms) - 490% slower
	CoffeeKup            (10168ms) - 534% slower
	BH                   (12341ms) - 669% slower
	BT                   (24331ms) - 1416% slower
	Ant.js               (36114ms) - 2150% slower

## Usage

	git clone https://github.com/HansHammel/template-benchmark.git
	cd template-benchmark
	npm install
	node ./benchmark.js
