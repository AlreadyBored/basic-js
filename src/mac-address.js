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
	let adressLength = n.split('-');
	if (adressLength.length !== 6) return false;
	let adressSplice = adressLength.map(el => el.split('')).flat();
	let result = [];
	for (let i = 0; i < adressSplice.length; i++) {
		if (adressSplice[i].match(/[0-9A-F]/g)) {
			result.push(adressSplice[i]);
		}
	}
	return result.length === 12;
}

module.exports = {
	isMAC48Address
};
