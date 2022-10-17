const { NotImplementedError } = require('../extensions/index.js');

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
 */
 function getDNSStats(domains) {
  let objDomain = {}
  for (let i=0;i<domains.length;i++){
    let item =  domains[i].split('.').reverse()
    item[0] = '.' + item[0]
    objDomain[item[0]]= objDomain[item[0]]?objDomain[item[0]]+1:1
    for (let i=1;i<item.length;i++){
      item[i] = item[i-1]+'.'+item[i]
      objDomain[item[i]] = (objDomain[item[i]] + 1) || 1
    }
  }
  return objDomain
}

module.exports = {
  getDNSStats
};
