import {
  NotImplementedError
} from '../extensions/index.js';

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
  const resultObj = {};
  let currentValue;
  for (let i = 0; i < domains.length; i++) {
    currentValue = domains[i].split('.').reverse();
    currentValue[0] = '.'.concat(currentValue[0]);
    for (let j = 0; j < currentValue.length; j++) {
      if (currentValue[j + 1]) {
        currentValue[j + 1] = currentValue[j].concat('.', currentValue[j + 1]);
      }
      if (Object.prototype.hasOwnProperty.call(resultObj, (currentValue[j]))) {
        resultObj[currentValue[j]] += 1;
      } else {
        resultObj[currentValue[j]] = 1;
      }
    }
  }
  return resultObj;
}