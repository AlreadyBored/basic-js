module.exports = function countCats(matrix) {
  const arr = matrix.reduce((a,b) => a.concat(b), []);
  let counter = 0;

  for (i in arr) {
    arr[i] === "^^" ? counter++ : "";
  }

  return counter;
};
