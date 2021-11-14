import { NotImplementedError } from '../extensions/index.js';

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
export default function getDNSStats(domains) {
  let domainsArr;
  let domainsObg = {};

  for (let i; i < domains.length; i++) {
    domainsArr = `${domainsArr}.${domains[i].split['.']}`;
  }
  

  domainsArr.forEach((x) => {
    domainsObg[x] = (domainsObg[x] || 0) + 1;
  });
  
  return domainsObg
}
function getDNSStats1(domains) {
  let domainsArr = [];
  let domainsObg = {};
  let result = '';


  domains.join('.').split('.').forEach((x) => {
    domainsObg[x] = (domainsObg[x] || 0) + 1;
  });
  
  return domainsObg
}

console.log(getDNSStats1(['epam.com', 'info.epam.com']))

// function getDNSStats1(domains) {
//   let domainsObg = {};

//   for (let i = 0; i < domains.length; i++){
//     let domainsNum = domains[i].split('.').length;
//     domainsObg[domains[i]] = domainsNum 
//   }
  
//   return domainsObg
// }

// console.log(getDNSStats1([
//  'code.yandex.ru',
//  'music.yandex.ru',
//  'yandex.ru'
// ]))