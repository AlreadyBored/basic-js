module.exports = function transform(arr) {
    if (arr.length < 1) return [];
    if (!Array.isArray(arr)) throw new Error('not an array');
    const NNewArr = [];         //N

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        i++;
        break;
      case '--discard-prev':
        if (NewArr.length !== 0) NewArr.pop()
        break;
      case '--double-next':
        if (i < arr.length - 1) NewArr.push(arr[i + 1]);
        break;
      case '--double-prev':
        if (i >= 1) NewArr.push(arr[i - 1]);
        break;
      default:
        NewArr.push(arr[i]);
    }
  }
  return NewArr;

};
