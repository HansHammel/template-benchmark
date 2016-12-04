# Node.JS template engines benchmark

## Note

- weakness of this test: it does not verify the output for correctness

## Engines as of 12/4/2016

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

## Test environment as of 12/4/2016

- CPU: Intel Core i7-2675QM 2.2Ghz 8GB 
- OS: Windows 10 Pro 64-Bit
- Node.JS version: 6.9.1

## Results as of 12/4/2016

	Performance report for 100000 templates:
	
    Underscore
      Escaped   : 2715ms
      Unescaped : 1834ms
      Total     : 4549ms

    blueimp-tmpl
      Escaped   : 1977ms
      Unescaped : 66ms
      Total     : 2043ms

    Swig
      Escaped   : 7213ms
      Unescaped : 255ms
      Total     : 7468ms

    Slm
      Escaped   : 4317ms
      Unescaped : 75ms
      Total     : 4392ms

    plates
      Escaped   : 4ms
      Unescaped : 4ms
      Total     : 8ms

    Nunjucks
      Escaped   : 5329ms
      Unescaped : 4370ms
      Total     : 9699ms

    lodash
      Escaped   : 2308ms
      Unescaped : 2048ms
      Total     : 4356ms

    Pug
      Escaped   : 5883ms
      Unescaped : 150ms
      Total     : 6033ms

    Pug without `with`
      Escaped   : 5962ms
      Unescaped : 46ms
      Total     : 6008ms

    Jade
      Escaped   : 6592ms
      Unescaped : 2747ms
      Total     : 9339ms

    Jade without `with`
      Escaped   : 2737ms
      Unescaped : 532ms
      Total     : 3269ms

    HTMLing
      Escaped   : 1792ms
      Unescaped : 61ms
      Total     : 1853ms

    Hogan.js
      Escaped   : 6066ms
      Unescaped : 464ms
      Total     : 6530ms

    Handlebars.js
      Escaped   : 4445ms
      Unescaped : 1031ms
      Total     : 5476ms

    Gaikan
      Escaped   : 6ms
      Unescaped : 7ms
      Total     : 13ms

    Fest
      Escaped   : 2726ms
      Unescaped : 270ms
      Total     : 2996ms

    EJS
      Escaped   : 6997ms
      Unescaped : 3483ms
      Total     : 10480ms

    EJS without `with`
      Escaped   : 2830ms
      Unescaped : 794ms
      Total     : 3624ms

    ECT
      Escaped   : 45ms
      Unescaped : 44ms
      Total     : 89ms

    Dust
      Escaped   : 8883ms
      Unescaped : 1106ms
      Total     : 9989ms

    doT
      Escaped   : 2984ms
      Unescaped : 72ms
      Total     : 3056ms

    CoffeeKup
      Escaped   : 3030ms
      Unescaped : 8434ms
      Total     : 11464ms

## Usage

	git clone https://github.com/HansHammel/template-benchmark.git
	cd template-benchmark
	npm install
	node ./benchmark.js

[![Dependency Status](https://david-dm.org/HansHammel/template-benchmark.svg)](https://david-dm.org/HansHammel/template-benchmark)
