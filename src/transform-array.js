module.exports = function transform(arr) {
  let resArr = [];
  if (!Array.isArray(arr)) throw Error;

  for (i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--double-next":
        if (i !== arr.length - 1) resArr.push(arr[i + 1]);
        break;
      case "--double-prev":
        if (i !== 0) resArr.push(arr[i - 1]);
        break;
      case "--discard-next":
        i++;
        break;
      case "--discard-prev":
        if (i !== 0) resArr.pop(arr[i - 1]);
        break;
      default:
        resArr.push(arr[i]);
        break;
    }
  }

  return resArr;
};
