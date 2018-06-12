'use strict';

const i2c = require('i2c-bus');
const extend = require('extend');

var i2cBus = i2c.openSync(1);

// setup the display
var displayConfig = require('../config/display.json');
displayConfig.i2cBus = i2cBus;
var display = require('../lib/display/ssd1306')(displayConfig);

// dim the display
display.oled.dimDisplay(true);
