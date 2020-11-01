const CustomError = require("../extensions/custom-error");

const chainMaker = {
  myChain: [],
  getLength() {
    return this.myChain.length;
  },
  addLink(value) {
    this.myChain.push(value);
    return this
  },
  removeLink(position) {
    if (typeof position != 'number') {
      this.resetMyChain()
      throw CustomError
    }
    if (this.myChain[position] == undefined) {
      this.resetMyChain()
      throw CustomError
    }
    this.myChain.splice(position - 1, 1);
    return this
  },
  reverseChain() {
    this.myChain.reverse();
    return this
  },
  finishChain() {
    if (this.myChain.length > 0) {
      let resultingChain = '';
      this.myChain.forEach((part, partIndex) => {
        resultingChain += ( ${part} )~~;
        if (partIndex == this.myChain.length - 1) {
          resultingChain = resultingChain.substring(0, resultingChain.length - 2)
        }
      })
      this.resetMyChain()
      return resultingChain
    } else {
      this.resetMyChain()
      return ''
    }
  },
  resetMyChain() {
    this.myChain = []
  }
};

module.exports = chainMaker;
