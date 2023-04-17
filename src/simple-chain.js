const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
   
  },
  addLink(/* value */) {
    
  },
  removeLink(/* position */) {
    
  },
  reverseChain() {
    
  },
  finishChain() {
    let fullchain = this.chain.join('~~');
  }
};

module.exports = {
  chainMaker
};
