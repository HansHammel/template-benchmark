var Module = require('module')
var path = require('path')

var React = require('react')
var ReactDOMServer = require('react-dom/server')

require("babel-register")({
    extensions: [".jsx"]
});

var tplData
var Component

module.exports.prepare = function (data, done) {
    Component = require('./tpl_escaped.jsx')
    tplData = data;
    done();
};

module.exports.prepareUnescaped = function (data, done) {
    Component = require('./tpl_unescaped.jsx')
    tplData = data;
    done();
    done();
};

module.exports.step = function (done) {
    var html = ReactDOMServer.renderToStaticMarkup(React.createElement(Component, tplData));
    done(undefined, html);
};

