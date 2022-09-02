/**
 * Implement chainMaker object according to task description
 * 
**/

const chainMaker = {
  result: '',

  getLength() {
    return this.result.split('~~').length;
  },

  addLink(value) {
   if (this.result.length === 0) {
      this.result = `( ${value} )`;
    } else {
      this.result = `${this.result}~~( ${value} )`;
    }
    
   return this;
  },

  removeLink(position) {
  	if (position > this.result.split('~~').length || position <= 0 || typeof position !== 'number') {
      this.result = '';
    	throw Error("You can't remove incorrect link!");
    }

  	this.tempArr = [];
    this.result.split('~~').forEach((v, i) => {
    	if (i !== position - 1) {
      	this.tempArr.push(v);
      }
    });
    this.result = this.tempArr.join('~~');

    return this;
  },

  reverseChain() {
    this.result = this.result.split('~~').reverse().join('~~');
    return this;
  },

  finishChain() {
    this.finalStr = this.result;
    this.result = '';
 		return this.finalStr;
  }
};

module.exports = {
  chainMaker
};
