const { expect, assert } = require('chai');
const { testOptional } = require('../extensions/index.js');
const { countCats } = require('../src/count-cats.js');

it.optional = testOptional;

Object.freeze(expect);
Object.freeze(assert);
