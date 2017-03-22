(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*eslint-env browser*/

var fck = require('f-ck');
var input = document.querySelector('input');
var output = document.querySelector('output');

change();

input.addEventListener('input', change);

function change() {
  output.value = fck(input.value);
}
console.log('jedoettniet');
//npm init -> zo begin je altijd een npm project.
// je kan -y doen dan zeg je ja op alle vragen en kan
// je deze aanpassen in je package.json file.
// in een package kan je aan iets meegeven dat iets een binary is
// dit betekent dat je dit in de terminal kan gebruiken. bijvoorbeeld
// zoals browserify
// -v of -h kan je ergens achter zetten om te testen of het werkt in je terminal
//
// EPIC shit hier beneden!!!!
// Je kan dus scriptjes schrijven in je scripts object
// binnen je package.json en dan deze in je terminal aanroepen via
// npm run-script build
//
//  "scripts": {
//    "build": "browserify index.js -o build.js"
//  }

},{"f-ck":2}],2:[function(require,module,exports){
'use strict';

/* Dependencies. */
var repeat = require('repeat-string');

/* Expose. */
module.exports = exports = vowel;

exports.vowel = vowel;
exports.inner = inner;
exports.grawlix = grawlix;

/* Methods. */
var floor = Math.floor;

/* Constants. */
var DEFAULT = '*';
var GRAWLIX = '@#$%!&?';
var VOWELS = /[aeiouy]/g;

/* `butt` > `b*tt` */
function vowel(value, character) {
  return value.replace(VOWELS, character || DEFAULT);
}

/* `butt` > `b**t` */
function inner(value, character) {
  if (value.length <= 2) {
    return value;
  }

  return value.charAt(0) +
    repeat(character || DEFAULT, value.length - 2) +
    value.charAt(value.length - 1);
}

/* `butt` > `@#$%` */
function grawlix(value, pattern) {
  var chars = pattern || GRAWLIX;
  var length = typeof value === 'number' ? value : value.length;
  var count = chars.length;
  return repeat(chars, floor(length / count)) + chars.slice(0, length % count);
}

},{"repeat-string":3}],3:[function(require,module,exports){
/*!
 * repeat-string <https://github.com/jonschlinkert/repeat-string>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

/**
 * Results cache
 */

var res = '';
var cache;

/**
 * Expose `repeat`
 */

module.exports = repeat;

/**
 * Repeat the given `string` the specified `number`
 * of times.
 *
 * **Example:**
 *
 * ```js
 * var repeat = require('repeat-string');
 * repeat('A', 5);
 * //=> AAAAA
 * ```
 *
 * @param {String} `string` The string to repeat
 * @param {Number} `number` The number of times to repeat the string
 * @return {String} Repeated string
 * @api public
 */

function repeat(str, num) {
  if (typeof str !== 'string') {
    throw new TypeError('expected a string');
  }

  // cover common, quick use cases
  if (num === 1) return str;
  if (num === 2) return str + str;

  var max = str.length * num;
  if (cache !== str || typeof cache === 'undefined') {
    cache = str;
    res = '';
  } else if (res.length >= max) {
    return res.substr(0, max);
  }

  while (max > res.length && num > 1) {
    if (num & 1) {
      res += str;
    }

    num >>= 1;
    str += str;
  }

  res += str;
  res = res.substr(0, max);
  return res;
}

},{}]},{},[1]);
