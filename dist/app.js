(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

const outputEnglish = () => {
	return "Cats suck!";
};

module.exports = outputEnglish;
},{}],2:[function(require,module,exports){
"use strict";

const outputFrench = () => {
	return "Les chats aspirent!";
};

module.exports = outputFrench;
},{}],3:[function(require,module,exports){
"use strict";

const french = require("./french.js");
const spanish = require("./spanish.js");
const italian = require("./italian.js");
const english = require("./english.js");


const GreetingGenerator = {
	french, spanish, italian, english
};


module.exports = GreetingGenerator;
},{"./english.js":1,"./french.js":2,"./italian.js":4,"./spanish.js":6}],4:[function(require,module,exports){
"use strict";

const outputItalian = () => {
	return "I gatti succhiano!";
};

module.exports = outputItalian;
},{}],5:[function(require,module,exports){
"use strict";

const GreetingGenerator = require("./greetingGenerator");

document.getElementById("buttons").addEventListener("click", (event) => {
	let languageSelected;
	if (event.target.id === 'buttons') {
		languageSelected = `english`;
	} else {
		languageSelected = event.target.id;
	}
	// console.log(languageSelected);
	document.getElementById("output").innerHTML = GreetingGenerator[languageSelected]();
});



},{"./greetingGenerator":3}],6:[function(require,module,exports){
"use strict";

const outputSpanish = () => {
	return "Los gatos chupan!";
};

module.exports = outputSpanish;
},{}]},{},[5]);
