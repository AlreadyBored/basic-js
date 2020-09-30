const commands = ['--double-prev', '--double-next', '--discard-prev', '--discard-next']
const transform = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error
  }
  let transformedArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (commands.includes(arr[i]) || arr[i-1] === '--discard-next' || arr[i-1] !== '--double-next' && arr[i+1] === '--discard-prev') {
      continue;
    }
    if (arr[i-1] === '--double-next' && arr[i+1] === '--double-prev') {
      transformedArray.push(arr[i], arr[i], arr[i])
    } else if (arr[i-1] === '--double-next' && arr[i+1] === '--discard-prev') {
      transformedArray.push(arr[i]);
    } else if (arr[i-1] === '--double-next' || arr[i+1] === '--double-prev') {
      transformedArray.push(arr[i], arr[i])
    } else {
      transformedArray.push(arr[i])
    }
  }
  return transformedArray;
};
module.exports = transform;