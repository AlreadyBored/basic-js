import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
let chainMaker;

export default chainMaker = {
  chain: [],


  getLength() {
    console.log(this.chain.length)
    return this.chain.length
  },
  addLink(value) {
    this.chain.push(`( ${value} )~~`)
    return this
  },
  removeLink(position) {
    if (typeof(position) === 'number'){
      if(!this.chain[position - 1]){
        this.chain = [];
        throw new Error("You can't remove incorrect link!");
      }
      this.chain[position - 1] = 'TTT';
      this.chain = this.chain.filter(x => x !== 'TTT');
    } 
    return this
  },
  reverseChain() {
    let result = '';
    console.log(result, '2')
    for (let i = 0; i < this.chain.length; i++){
      result = `${this.chain[i]},${result}`;    
    }
    result = result.split(',').filter(x => x !== '');
    if (result === ''){result = []}
    console.log(result, '1')
    this.chain = result;
    return this
  },
  finishChain() {
    let finaleResultate;
    if (this.chain.join('').slice(-2) === '~~'){
      console.log(this.chain.join('').slice(0, -2));
      finaleResultate = this.chain.join('').slice(0, -2);
      this.chain = [];
      return finaleResultate;
    }
    finaleResultate = this.chain.join('');
    this.chain = [];
    console.log(this.chain.join(''));
    return finaleResultate
  }
};






let chainMaker1 = {
  chain: [],


  getLength() {
    console.log(this.chain.length)
    return this.chain.length
  },
  addLink(value) {
    this.chain.push(`( ${value} )~~`)
    return this
  },
  removeLink(position) {
    if (typeof(position) === 'number'){
      if(!this.chain[position - 1]){
        this.chain = [];
        return new Error("You can't remove incorrect link!");
      }
      this.chain[position - 1] = 'TTT';
      this.chain = this.chain.filter(x => x !== 'TTT');
      console.log(this.chain)
    } 
    return this
  },
  reverseChain() {
    let result = '';
    console.log(result, '2')
    for (let i = 0; i < this.chain.length; i++){
      result = `${this.chain[i]},${result}`;    
    }
    result = result.split(',').filter(x => x !== '');

    if (result === ''){result = []}
    console.log(result, '1')
    this.chain = result;
    return this
  },
  finishChain() {
    let finaleResultate;
    if (this.chain.join('').slice(-2) === '~~'){
      console.log(this.chain.join('').slice(0, -2));
      finaleResultate = this.chain.join('').slice(0, -2);
      this.chain = [];
      return finaleResultate;
    }
    finaleResultate = this.chain.join('');
    this.chain = [];
    console.log(this.chain.join(''));
    return finaleResultate
  }
};

// chainMaker1.addLink('das').removeLink(2).finishChain()
chainMaker1.reverseChain().reverseChain().reverseChain().addLink(NaN).reverseChain().addLink(null).addLink(1.233).addLink(true).addLink(false).removeLink(3).addLink(1.233).finishChain()
// chainMaker1.reverseChain().addLink('ABC').reverseChain().reverseChain().reverseChain().addLink(Infinity).addLink(false).addLink(0).addLink('8.963').removeLink(2).removeLink(1).reverseChain().finishChain()
// chainMaker1.addLink(null).addLink(false).addLink(22).reverseChain().reverseChain().removeLink(2).reverseChain().reverseChain().addLink({ 0: 'first', 1: 'second', 'length': 2 }).reverseChain().addLink('DEF').finishChain()
// chainMaker1.addLink(3.14).addLink(1).addLink({ 0: 'first', 1: 'second', 'length': 2 }).removeLink(1).addLink('DEF').addLink({ 0: 'first', 1: 'second', 'length': 2 }).removeLink(1).addLink(true).addLink(false).addLink(333).reverseChain().reverseChain().finishChain()
// chainMaker1.addLink('ABC').reverseChain().reverseChain().addLink('DEF').removeLink(1).addLink({ 0: 'first', 1: 'second', 'length': 2 }).reverseChain().addLink(1.233).addLink(1.233).reverseChain().addLink('ABC').finishChain()
// chainMaker1.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI')
// chainMaker1.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain()
// chainMaker1.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain()


