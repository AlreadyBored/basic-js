const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value='') {
    this.chain.push(value)
    return this
  },
  removeLink(position) {
    if (isNaN(position)) {
      this.chain.length = 0
      throw new Error(`${position} is not a number`)
    }
    this.chain.splice(position-1, 1)
    return this
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    try {
      return this.chain.map(item => `( ${item} )`).join('~~');
    } finally {
      this.chain.length = 0
    }
  }
};
