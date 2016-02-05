var jsdom = require('jsdom-nogyp');
var wnd = jsdom.jsdom().createWindow();

var globalKeys = [
    'document',
    'HTMLElement',
    'navigator'
];

// load the jQuery object into the window
GLOBAL.jQuery = require('jquery')(wnd);

GLOBAL.window = wnd;

// temporarily add global keys, so that we can load kendo
globalKeys.forEach(function (key) {
    GLOBAL[key] = wnd[key];
});

// load the kendo object into the window and the global context
require('kendo-ui-core/src/kendo.core.js');
GLOBAL.kendo = wnd.kendo;

// remove added global keys
delete GLOBAL.window;

globalKeys.forEach(function (key) {
    delete GLOBAL[key];
});

module.exports = wnd.kendo;
