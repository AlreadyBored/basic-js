const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    let res = '';
    if (value !== undefined) {
      res = `( ${value} )`;
    } else {
      res = '( )';
    }
    this.chain.push(res);
    return this;
  },
  removeLink(position) {
    if (!this.chain[position]) {
      this.chain = [];
      throw new Error();
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let res = this.chain.join('~~');
    this.chain = [];
    return res;
  },
};

module.exports = {
  chainMaker,
};
