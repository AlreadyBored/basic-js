const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chains: [],
  getLength() {
    return this.chains.length
  },
  addLink(value) {
    if (value == null){
      this.chains.push(' null ')
    } else if (value == undefined){
      this.chains.push(' ')
    } else {
      this.chains.push(` ${''+value} `)
    }
    return this
  },
  removeLink(position) {
    if (!Number.isInteger(position)) {
      this.chains.splice(0,this.chains.length)
      throw new Error("You can\'t remove incorrect link!")
    } else if ((position < 1) || (position > this.chains.length)) {
      this.chains.splice(0,this.chains.length)
      throw new Error("You can\'t remove incorrect link!")
    } else {
      this.chains.splice((position - 1), 1)
    }
    return this
  },
  reverseChain() {
    this.chains = this.chains.reduce((acc, value) => {
      return [value, ...acc]
    }, [])
    return this
  },
  finishChain() {
    if (this.chains.length === 0){
      return ''
    } else {
      res = `(${this.chains.join(')~~(')})`
      this.chains.splice(0,this.chains.length)
      return res
    }
  }
};

module.exports = {
  chainMaker
};
