import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
  let namesList = {};
  let result = '';
  
  names.forEach(name => {
    namesList[name] = (namesList[name] || 0) + 1;
    if (namesList[name] > 0){
      result = `${result}${name}(${namesList[name] - 1}),`
    }
  });

  let resultArr = result.slice(0, result.length - 1).split(',')

  for (let i = 0; i < resultArr.length; i++){
    if (resultArr[i].slice(resultArr[i].length - 3) === '(0)'){
      resultArr[i] = resultArr[i].slice(0, resultArr[i].length - 3)
    }    
  }

  let obj = {}
  
  resultArr.forEach(name => {
    obj[name] = (obj[name] || 0) + 1;
  });
  
  if (Object.values(obj).includes(2)) {
    renameFiles1(resultArr)
  } else{
    console.log(obj)
    console.log(resultArr)
    return resultArr 
  }
}


function renameFiles1(names) {
  let namesList = {};
  let result = '';
  
  names.forEach(name => {
    namesList[name] = (namesList[name] || 0) + 1;
    if (namesList[name] > 0){
      result = `${result}${name}(${namesList[name] - 1}),`
    }
  });

  // result cleaning
  let resultArr = result.slice(0, result.length - 1).split(',')

  for (let i = 0; i < resultArr.length; i++){
    if (resultArr[i].slice(resultArr[i].length - 3) === '(0)'){
      resultArr[i] = resultArr[i].slice(0, resultArr[i].length - 3)
    }    
  }

  // Check if similarities are left
  let obj = {}
  
  resultArr.forEach(name => {
    obj[name] = (obj[name] || 0) + 1;
  });
  
  if (Object.values(obj).includes(2)) {
    renameFiles1(resultArr)
  } else {
    console.log(resultArr)
    return resultArr
  }
}

console.log(renameFiles1(['doc', 'doc', 'image', 'doc(1)', 'doc']))
