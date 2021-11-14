import { reporters } from 'mocha';
import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, obj) {
  let RT1 = obj.repeatTimes;
  let RT2 = obj.additionRepeatTimes;
  let SR1 = obj.separator;
  let SR2 = obj.additionSeparator;
  let PlusStr = obj.addition;
  let result = '';
  console.log(obj)

  console.log(obj)
  if(RT1 === undefined){RT1 = 0}
  if(RT2 === undefined){RT2 = 0}
  if(SR2 === undefined && SR1 === undefined && PlusStr === undefined){SR2 = '+'}
  if(SR2 === undefined){SR2 = ''}
  if(SR1 === undefined){SR1 = ''}
  if(PlusStr === undefined){PlusStr = ''}
  console.log(RT1)
  console.log(RT2)
  console.log(SR1)
  console.log(SR2)
  console.log(PlusStr)

  let innerArr = [];
  let outerArr = [];
  for (let i = 1; i <= RT2; i++){
    innerArr.push(`${PlusStr}${SR2}`)
  }
  innerArr = innerArr.join('').slice(0, innerArr.join('').length - SR2.length)
  console.log(innerArr)
  for (let i = 1; i <= RT1; i++){
    outerArr.push(`${str}${innerArr}${SR2}${SR1}`);
  }
  console.log(outerArr)
  if (SR1 === ''){
    result = outerArr.join('').slice(0, outerArr.join('').length - SR2.length)
  } else {
    result = outerArr.join('').slice(0, outerArr.join('').length - SR1.length)
  }
  
  console.log(result);
  return result
}




function repeater1(str, obj) {
  let RT1 = obj.repeatTimes;
  let RT2 = obj.additionRepeatTimes;
  let SR1 = obj.separator;
  let SR2 = obj.additionSeparator;
  let PlusStr = obj.addition;
  let result = '';
  console.log(obj)

  console.log(obj)
  if(RT1 === undefined){RT1 = 0}
  if(RT2 === undefined){RT2 = 0}
  if(SR2 === undefined && SR1 === undefined && PlusStr === undefined){SR2 = '+'}
  if(SR2 === undefined){SR2 = ''}
  if(SR1 === undefined){SR1 = ''}
  if(PlusStr === undefined){PlusStr = ''}
  console.log(RT1)
  console.log(RT2)
  console.log(SR1)
  console.log(SR2)
  console.log(PlusStr)

  let innerArr = [];
  let outerArr = [];
  for (let i = 1; i <= RT2; i++){
    innerArr.push(`${PlusStr}${SR2}`)
  }
  innerArr = innerArr.join('').slice(0, innerArr.join('').length - SR2.length);
  console.log(innerArr)
  for (let i = 1; i <= RT1; i++){
    outerArr.push(`${str}${innerArr}${SR2}${SR1}`);
  }
  console.log(outerArr)
  if (SR1 === ''){
    result = outerArr.join('').slice(0, outerArr.join('').length - SR2.length)
  } else {
    result = outerArr.join('').slice(0, outerArr.join('').length - SR1.length)
  }
  
  console.log(result);
  return result
}

  repeater1('la', { repeatTimes: 3 })
  repeater1('la', { repeatTimes: 3, separator: 's' })