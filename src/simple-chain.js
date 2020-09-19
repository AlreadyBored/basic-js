  
const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (position < this.getLength()) {
      this.chain.splice(position - 1, 1);
    } else {
      this.chain = [];
      throw new Error();
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const value = this.chain.map(e => e === null ? '( null )' : `( ${e} )`).join("~~");
    this.chain = [];
    return value;
  }
};

module.exports = chainMaker;