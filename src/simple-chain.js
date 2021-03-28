const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr:[],
  getLength() {
    this.arr.length;
    return this;
  },
  addLink(value) {
    if(value !== undefined) this.arr.push(value);
    else this.arr.push('');
   return this;
  },
  removeLink(position) {
    if (typeof(position) != "number" || position - 1 < 0 || position > this.arr.length){
      this.arr = [];
      throw Error();
    }
    this.arr.splice(position - 1, 1);
   return this;
  },
  reverseChain() {
    this.arr.reverse();
  return  this;
  },
  finishChain() {
    let total = "";
     for(let i = 0; i < this.arr.length; i++){
        total = total + '( ' + this.arr[i] + ' )~~';
     }
     this.arr = [];
     return total.slice(0, -2);
  }
};

module.exports = chainMaker;
