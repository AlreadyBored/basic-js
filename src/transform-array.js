const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error
  }

  const transformArray = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case ('--discard-next'):
        ++i;
        break;
      case ('--discard-prev'):
        if (transformArray.length !== 0  && arr[i - 2] !== '--discard-next') {
          transformArray.pop()
        }
        break;
      case ('--double-next'):
        if (i < arr.length - 1) {
          transformArray.push(arr[i + 1]);
        }
        break;
      case ('--double-prev'):
        if (i !== 0 && arr[i - 2] !== '--discard-next') {
          transformArray.push(arr[i - 1]);
        }
        break;
      default:
        transformArray.push(arr[i]);
        break;
    }
  }

  console.log(transformArray);
  return transformArray;
}