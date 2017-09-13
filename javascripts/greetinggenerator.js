"use strict";

const french = require("./french.js");
const spanish = require("./spanish.js");
const italian = require("./italian.js");


const GreetingGenerator = {
	french, spanish, italian
};


module.exports = GreetingGenerator;