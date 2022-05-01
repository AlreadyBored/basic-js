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
	const obj = {};
	const arr = domains.map((item) => item.split('.').reverse());
	let dns = '';

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			dns += `.${arr[i][j]}`;
			obj[dns] = obj[dns] ? (obj[dns] += 1) : 1;
		}
		dns = '';
	}
	return obj;
}
module.exports = {
	getDNSStats
};

