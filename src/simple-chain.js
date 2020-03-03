const chainMaker = {
  arr:[],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    return this.arr.push(`( ${value} )`);
  },
  removeLink(position) {
    return this.arr.splice(position - 1, 1);
  },
  reverseChain() {
    return this.arr.reverse();
  },
  finishChain() {
    const result = this.arr.join('~~');
    return result;
  }
};

module.exports = chainMaker;
