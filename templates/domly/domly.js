var fs = require('fs');
var domly = require('domly');
require("jsdom-global")();
var compiled;
var tplData;

module.exports.prepare = function(data, done) {
  var str = fs.readFileSync(__dirname + '/tpl_escaped.html', 'utf8');
  tplData = data;
  compiled = domly.compile(str);
  console.log(compiled);
  done();
};

module.exports.prepareUnescaped = function(data, done) {
  var str = fs.readFileSync(__dirname + '/tpl_unescaped.html', 'utf8');
  tplData = data;
  compiled = domly.compile(str);
  done();
};

module.exports.step = function(done) {
  var html = compiled(tplData);
  done(undefined, html);
};
