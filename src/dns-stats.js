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
  const collectStats = {};

  for (const domain of domains) {
    const parts = domain.split('.').reverse();
    let currentDNS = '';

    for (const part of parts) {
      currentDNS += `.${part}`;
      collectStats[currentDNS] = (collectStats[currentDNS] || 0) + 1;
    }
  }

  return collectStats;
}

module.exports = {
  getDNSStats
};
