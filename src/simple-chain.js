const CustomError = require("../extensions/custom-error");

const chainMaker = {

  chainResult: [],

  getLength() {
    return this.chainResult.length;
  },
  addLink(value) {
    this.chainResult.push(`${String(value)}`);
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position < 0 || position > this.chainResult.length) {
      this.chainResult.length = 0;
      throw new Error;
    }
    this.chainResult.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chainResult.reverse();
    return this;
  },
  finishChain() {
    let strFinal = `( ${this.chainResult.join(' )~~( ')} )`;
    this.chainResult.length = 0;
    return strFinal;
  }
};

module.exports = chainMaker;