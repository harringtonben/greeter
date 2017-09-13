"use strict";

const french = require("./french.js");
const spanish = require("./spanish.js");
const italian = require("./italian.js");
const english = require("./english.js");


const GreetingGenerator = {
	french, spanish, italian, english
};


module.exports = GreetingGenerator;