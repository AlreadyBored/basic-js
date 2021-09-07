import {
  NotImplementedError
} from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  chain: [],

  getLength() {
    return this.chain.length
  },

  addLink(value) {
    this.chain.splice(this.getLength(), 0, value)
    return this
  },

  removeLink(position) {
    if (!Number.isInteger(position) ||
      position < 1 ||
      position > this.getLength()) {
      this.chain = []
      throw new Error("You can't remove incorrect link!" )
    }
    this.chain.splice(position - 1, 1)
    return this
  },

  reverseChain() {
    this.chain.reverse()
    return this
  },

  finishChain() {
    let res = this.chain
      .map(el => `( ${el} )`)
      .join('~~')
    this.chain = []
    return res
  }
};