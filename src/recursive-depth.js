import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {

  calculateDepth(arr) {     
    if (arr.length === 0) {arr = [1]}
    
    const mmm = () => {
     if (Array.isArray(arr)) {
       return 1 + Math.max.apply(null, arr.map(x => this.calculateDepth(x)))
     } else {
       return 0
     }   
   }
   
   return mmm()
 }


}




class DepthCalculator1 {

  calculateDepth(arr) {
    // let kkk = arr
    
    // for (let item of kkk){
    //   if (item.length === 0) {item = 500}
    //   if(Array.isArray(item)) {
    //     this.calculateDepth(item)
    //   }
    //   console.log(item)
    // }     
    
    // console.log(kkk)
    if (arr.length === 0) {arr = [1]}
    
     const mmm = () => {
      if (Array.isArray(arr)) {
        return 1 + Math.max.apply(null, arr.map(x => this.calculateDepth(x)))
      } else {
        return 0
      }   
    }
    
    return mmm()
  }
}
const lll = new DepthCalculator1();

console.log(lll.calculateDepth([1, 2, 3, 4, [1, [2]], [1, [2, [3, [[[[]]]]]]]]))
  
console.log(`${[[[[[]]]]]}`)
  //   console.log(this.result, '1')
  //   let currArr = arr

  //   async function mmm(){
  //     DepthCalculator1.result = DepthCalculator1.result + 1;
  //     for (let i = 0; i < currArr.length; i++){
  //       console.log(currArr)
  //       if(Array.isArray(currArr)) {
  //         console.log('sadsad')
  //         currArr = arr[i]; 
  //         mmm();
  //       }
  //     }
  //   }
  //   mmm()

    
    //   this.result = this.result + 1;
    //   console.log(arr.map(x => this.calculateDepth(x)))
    // }
  
    // return this.result

  //   const Result = this.result
  //   this.result = 0
  //   console.log(Result, '1234')
  //   return Result
  // }