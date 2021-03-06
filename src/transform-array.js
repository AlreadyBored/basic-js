module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error

  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-prev':
        newArr.pop()
        break;
      case '--double-prev':
        newArr.push(newArr[newArr.length - 1])
        break;
      case '--discard-next':
        newArr.push(undefined)
        i++
        break;      
      case '--double-next':
        newArr.push(arr[i + 1])
        break;
      default:
        newArr.push(arr[i])
        break;
    }
  }
  return newArr.filter((item) => item !== undefined)
};
