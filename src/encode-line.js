/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
**/

function encodeLine(str) {
	let result = '';
  let n;
  
  for (let i = 0; i < str.length; i++) {
  	n = 0;
    
    if (str[i] !== str[i + 1]) {
    result = `${result}${str[i]}`;
    } else {
    	while(str[i] === str[i + n]) {
      	n++;
    	}
      
      result = `${result}${n}${str[i]}`;
      i = i + n - 1;
    }
  }
  return result;
}

module.exports = {
  encodeLine
};
