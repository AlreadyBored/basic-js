const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new CustomError
  }
  if (typeof arr[0] == 'object' || typeof arr[0] == 'function') {
    throw new CustomError
  }
  let resArr = [...arr]; // cloning the source array
  for (i = 0; i < resArr.length; i ++) {
      switch (resArr[i]) {
      case '--discard-next':
        resArr[i] = undefined;
        resArr[i+1] = undefined;
        break
      case '--discard-prev':
        resArr[i] = undefined;
        resArr[i-1] = undefined;
        break
      case '--double-next':
        if (resArr[i+1] != undefined) {
          resArr[i] = resArr[i+1];
        } else {
          resArr[i] = undefined;
        }
        break
      case '--double-prev':
        if (resArr[i-1] != undefined) {
          resArr[i] = resArr[i-1];
        } else {
          resArr[i] = undefined;
        }
        break
      default:
        // nothing
        break
    }
  }
  let finalArr = [];
  for (const element of resArr) {
    if (element != undefined) {
      finalArr.push(element)
    }
  }
  return finalArr
  // for (let i = 0; i < arr.length; i++) {
  //   switch (arr[i]) {
  //     case '--discard-next':
  //       i++
  //       break
  //     case '--discard-prev':
  //       resArr.pop()
  //       break
  //     case '--double-next':
  //       if (arr[i+1] != undefined) {
  //         resArr.push(arr[i+1])
  //       }
  //       break
  //     case '--double-prev':
  //       if (arr[i-1] != undefined) {
  //         resArr.push(arr[i-1])
  //       }
  //       break
  //     default:
  //       resArr.push(arr[i])
  //       break
  //   }
  // } this won't work because of some weird sequences and unexpected test cases
  return resArr
};
