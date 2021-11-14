import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let objS1 = {};
  let objS2 = {};
  let result = 0;

  s1.split('').forEach(x => {
    objS1[x] = (objS1[x] || 0) + 1;
  });    
  s2.split('').forEach(x => {
    objS2[x] = (objS2[x] || 0) + 1;
  });
  
  let similarAttList = [];

  Object.keys(objS1).forEach(att => {
    if (Object.keys(objS2).includes(att)){
      similarAttList.push(att)
    }
  })

  for (let i = 0; i < similarAttList.length; i++){
    result = result + Math.min(objS1[similarAttList[i]], objS2[similarAttList[i]])
  }

  console.log(result)
  return result
}

// function getCommonCharacterCount1(s1, s2) {
//     let objS1 = {};
//     let objS2 = {};
//     let result = 0;

//     s1.split('').forEach(x => {
//       objS1[x] = (objS1[x] || 0) + 1;
//     });    
//     s2.split('').forEach(x => {
//       objS2[x] = (objS2[x] || 0) + 1;
//     });
    
//     let similarAttList = [];

//     Object.keys(objS1).forEach(att => {
//       if (Object.keys(objS2).includes(att)){
//         similarAttList.push(att)
//       }
//     })

//     for (let i = 0; i < similarAttList.length; i++){
//       result = result + Math.min(objS1[similarAttList[i]], objS2[similarAttList[i]])
//     }

//     console.log(result)
//     return result
// }
// console.log(getCommonCharacterCount1('aabcc', 'adcaa'))