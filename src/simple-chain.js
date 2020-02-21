const chainMaker = {
  newChain: [],
  getLength() {
    return this.newChain.length;
  },
  addLink(value) {
    (value === undefined) ? this.newChain.push('(  )') : this.newChain.push('( ' + value + ' )');
    return this;
  },
  removeLink(position) {
    if (this.newChain.length - 1 < position
        || position <= 0
        || !Number.isInteger(position)) {
      this.newChain = [];
      throw Error;
    };
    this.newChain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.newChain.reverse();
    return this;
  },
  finishChain() {
    const finishChain = this.newChain.join('~~');
    this.newChain = [];
    return finishChain;
  }
};

module.exports = chainMaker;
