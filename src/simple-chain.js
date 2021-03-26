  const CustomError = require("../extensions/custom-error");

const chainMaker = {
  array: [],
  getLength() {
    return this.array.lenght
  },
  addLink(value) {
         
     this.array.push(`( ${value} )`)
     return this
  },
  removeLink(position) {
      if( typeof position !=="number"  || position>this.array.lenght){
        this.array=[]
           throw new Error('THROWN')
      }
      this.array.splice(position-1, 1)
      return this
  },
  reverseChain() {
            this.array=this.array.reverse()
             return this
  },
  finishChain() {
    let string=this.array.join('~~')
     this.array=[]
    return string
  }
};

module.exports = chainMaker;
