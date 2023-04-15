const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
    chain: [],
    getLength: function() {
        return this.chain.length
    },
    addLink: function(value) {
        this.chain.push(`( ${value} )`)
        return this
    },
    removeLink: function(position) {
        if(!typeof position === 'number' || position % 1 != 0 || position < 1 || position > this.chain.length) {
            this.chain = []
            throw new Error(`You can't remove incorrect link!`)
        }
        this.chain.splice(position - 1, 1)
        return this
    },
    reverseChain: function() {
        this.chain.reverse()
        return this
    },
    finishChain: function() {
        const finishChain = this.chain.join('~~')
        this.chain = []
        return finishChain
    }
};

module.exports = {
  chainMaker
};
