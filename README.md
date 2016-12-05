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

    Performance report for 10000 templates (win32):

    Gaikan               (    2ms) - fastest
    plates               (    2ms) - 0% slower
    ECT                  (   13ms) - 550% slower
    HTMLing              (  184ms) - 9100% slower
    Fest                 (  255ms) - 12650% slower
    doT                  (  265ms) - 13150% slower
    blueimp-tmpl         (  285ms) - 14150% slower
    Jade without `with`  (  327ms) - 16250% slower
    artTemplate          (  333ms) - 16550% slower
    Handlebars.js        (  396ms) - 19700% slower
    Tangular             (  409ms) - 20350% slower
    lodash               (  416ms) - 20700% slower
    EJS without `with`   (  444ms) - 22100% slower
    Slm                  (  445ms) - 22150% slower
    Underscore           (  469ms) - 23350% slower
    Pug without `with`   (  565ms) - 28150% slower
    Hogan.js             (  583ms) - 29050% slower
    nai                  (  704ms) - 35100% slower
    Pug                  (  718ms) - 35800% slower
    Swig                 (  785ms) - 39150% slower
    Jade                 (  893ms) - 44550% slower
    Dust                 (  921ms) - 45950% slower
    Nunjucks             (  961ms) - 47950% slower
    EJS                  ( 1108ms) - 55300% slower
    BH                   ( 1238ms) - 61800% slower
    CoffeeKup            ( 1437ms) - 71750% slower
    Ant.js `.set`        ( 1457ms) - 72750% slower
    Ant.js               ( 2504ms) - 125100% slower
    react                (56727ms) - 2836250% slower

## Usage

	git clone https://github.com/HansHammel/template-benchmark.git
	cd template-benchmark
	npm install
	node ./benchmark.js

[![Dependency Status](https://david-dm.org/HansHammel/template-benchmark.svg)](https://david-dm.org/HansHammel/template-benchmark)
