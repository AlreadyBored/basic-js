const CustomError = require("../extensions/custom-error");
const chainMaker = {
  elements: [],
  addLink(value) {
      if (value === undefined) {
        this.elements.push('( )');
        return this;
      }
      this.elements.push(value);
      return this;
  },
  finishChain() {
    let result = this.elements.map(element => `( ${element} )`).join("~~");
    this.elements = [];
    return result;
  },
  removeLink(position){
      if  (!this.elements[position - 1] && !this.elements[position]) {
        this.elements = [];
        throw "Error"
      }
      this.elements = this.elements.slice(0, position - 1)
      .concat(this.elements.slice(position));
      return this;
  },
  reverseChain() {
    this.elements.reverse();
    return this;
  },
  getLength() {
    return this.elements.length;
  }
};
module.exports = chainMaker;