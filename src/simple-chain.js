const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  string: [], 
  getLength: function() { 
    return this.string.length 
  },
  addLink: function(value) {  
    this.string.push(`${value}`) 
      return this 
  },
  removeLink(position) {
    if (typeof position === 'string' || position < 1 || position > this.string.length) { 
      this.string = [] 
      throw Error('You can\'t remove incorrect link!')
    };
    this.string.splice(position - 1, 1)
    return this
  },
  reverseChain: function() {
    this.string.reverse() 
    return this
  },
  finishChain:  function() {
    let finish = '( ' + this.string.join(' )~~( ') + ' )';
    this.string = []
    return finish
  }
};

module.exports = {
  chainMaker
};
