const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */ [234561];

function deleteDigit(n) {
  let str = n + "";
  let max = 0;
  for (let i = 0; i < str.length; i++) {
    if (max < str.replace(str[i], "")) {
      max = str.replace(str[i], "");
    }
  }
  return parseInt(max);
}

module.exports = {
  deleteDigit,
};
