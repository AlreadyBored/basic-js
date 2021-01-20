const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(value);
    return this;
  },
  removeLink(position) {
    if (typeof position !== "number" ||
    position > this.arr.length - 1 ||
    position <= 0) {
    this.arr = [];
    throw new Error('wrong position');
    }
    this.arr.splice(position - 1, 1);
    return this;  
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let finarr = this.arr.reduce((res, chain, i) => {
      res += `( ${chain} )`;
      if (i < this.arr.length - 1) res += '~~';
      return res;
    }, '')
    this.arr = [];
    return finarr;
  }
};

module.exports = chainMaker;
