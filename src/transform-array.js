const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

	if (!Array.isArray(arr)) throw new Error();
	if (arr.length == 0) return [];

	let myArray = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] != '--discard-next' && arr[i] != '--discard-prev' && arr[i] != '--double-next' && arr[i] != '--double-prev') {
			myArray.push(arr[i]);
		} else if (arr[i] == '--discard-prev' && i != 0 && arr[i - 2] != '--discard-next') {
			myArray.pop();
		} else if (arr[i] == '--discard-next' && i != arr.length - 1) {
			i++;
		} else if (arr[i] == '--double-prev' && i != 0 && arr[i - 2] != '--discard-next') {
			myArray.push(arr[i - 1]);
		} else if (arr[i] == '--double-next' && i != arr.length - 1) {
			myArray.push(arr[i + 1]);
		}
	} return myArray;
}