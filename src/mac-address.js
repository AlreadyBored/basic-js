const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  n = n.split('-');
  if(n.length != 6){
    return false;
  }
  for(let i = 0; i < n.length; i++){
    let pet = n[i];
    if(pet.length !== 2){
      return false;

    }
    for(let j = 0; j < pet.length; j++){
    if (!isNaN(pet[j])) {
      if(pet[j] < 0 || pet[j] > 9){
        console.log('цифра')
        return false;
      }
    }
    if (/^[a-zA-Z]+$/.test(pet[j])){
      if (pet[j] >= 'A' && pet[j] <= 'F' ){
      }else{
      
        return false;
      }
    }

    }
  }
  return true;
  }


console.log(isMAC48Address('00-1B-63-84-45-6z'))
module.exports = {
  isMAC48Address
};
