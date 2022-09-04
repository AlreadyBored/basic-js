/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
**/

function getDNSStats(arr) {
  let result = {};
  let tempArr;
  
  for (let i = 0; i < arr.length; i++) {
  	arr[i] = arr[i].split('.').reverse();
    tempArr = [];
    
    for (let j = 0; j < arr[i].length; j++) {
    	if (j === 0) {
      	tempArr.push(`.${arr[i][j]}`);
      } else {
      	tempArr.push(arr[i][j]);
      }
      
    	if (result.hasOwnProperty(tempArr.join('.'))) {
      	result[tempArr.join('.')] = result[tempArr.join('.')] + 1;
        console.log(`+1`)
      } else {
        result[tempArr.join('.')] = 1;
      }
    }
  }
	return result;
}

module.exports = {
  getDNSStats
};
