const { checkImplementedDecorator } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(/* str */) {}

module.exports = {
  encodeLine: checkImplementedDecorator(encodeLine),
};
