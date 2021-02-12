const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chains: [],

  getLength() {
    console.log(this.chains.length);
    return this.chains.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.chains.push('( )');
      return this;
    }
    this.chains.push(`( ${value} )`);
    return this
  },
  removeLink(position) {
    if (typeof position !== 'number' ||
      Number.isInteger(position) === false ||
      position < 0 || position > this.chains.length) {
      this.chains = [];
      throw new Error;
    }
    this.chains.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chains.reverse();
    return this;
  },
  finishChain() {
    const result = this.chains.join('~~');
    this.chains = [];
    return result;
  }
}

module.exports = chainMaker;