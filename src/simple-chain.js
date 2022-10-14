/**
 * Implement chainMaker object according to task description
 *
 */
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
    if (isNaN(position) || position >= this.chain.length || position <= 0) {
      this.chain = [];

      throw new Error("You can't remove incorrect link!");
    }

    this.chain.splice(position - 1, 1);
    
    return this;
  },

  reverseChain() {
    this.chain.reverse();

    return this;
  },

  finishChain() {
    let resultChain = "";
    
    this.chain.forEach((el) => (resultChain += `( ${el} )~~`));
   
    this.chain = [];
   
    return resultChain.slice(0, -2);
  },
};

module.exports = {
  chainMaker,
};
