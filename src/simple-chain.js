const { decorateObject } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  getLength() {},
  addLink(/* value */) {},
  removeLink(/* position */) {},
  reverseChain() {},
  finishChain() {},
};

module.exports = {
  chainMaker: decorateObject(chainMaker),
};
