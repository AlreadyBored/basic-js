const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    console.log(this.chain.length)
  },
  addLink(value) {
    if (typeof value == 'undefined') {
      this.chain.push(`( )`)
    } else if (value == null) {
      this.chain.push(`( null )`)
    } else if (value == NaN) {
      this.chain.push(`( NaN )`)
    } else {
      this.chain.push(`( ${value} )`)
    }
    return this
  },
  removeLink(position) {
    if (typeof position !== 'number' || position > this.chain.length || position <= 0) {
      this.chain = []
      throw new Error('You can\'t remove incorrect link!')
    }
    this.chain.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    if (this.chain.length) {
      this.chain.reverse()
    }
    return this
  },
  finishChain() {
    let finChain =  this.chain.join('~~')
    this.chain = []
    return finChain
  }
};

module.exports = {
  chainMaker
};
