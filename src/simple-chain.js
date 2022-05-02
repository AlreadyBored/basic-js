const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr : [],
  getLength() {
    return this.arr.length;
    // remove line with error and write your code here
  },
  addLink(value) {
    this.arr.push(`( ${value} )`);
    return this;
    // remove line with error and write your code here
  },
  removeLink(position) {
      if (position < 1 || position > this.getLength() || typeof position !== 'number') {
      this.arr = [];
      throw new Error("You can't remove incorrect link!");
  }
    this.arr.splice(position - 1, 1);
    return this;
    // remove line with error and write your code here
  },
  reverseChain() {
    this.arr.reverse();
    return this
    // remove line with error and write your code here
  },
  finishChain() {
    let result = this.arr.join('~~');
    this.arr = [];
    return result;
    // remove line with error and write your code here

  }
};

module.exports = {
  chainMaker
};


