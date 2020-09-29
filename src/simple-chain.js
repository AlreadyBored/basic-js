const chainMaker = {
  chain: [],
  
  getLength() {
    this.chain.length;
    return this;
  },
  addLink(value) {
    this.chain.push(String(value))
    return this
  },
  removeLink(position) {
    if (this.chain[position-1] !== undefined) {
      this.chain.splice(position-1, 1);
    } else {
      this.chain = [];
      throw new Error();
    }
    return this;
  },
  
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    let res = '';
    for (let i = 0; i < this.chain.length; i++) {
      res += `( ${this.chain[i]} )~~`;
    }
    this.chain = [];
    return res.slice(0, -2);
  },
};
module.exports = chainMaker;