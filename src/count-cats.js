module.exports = function countCats(matrix) {
 /* throw 'Not implemented';*/
  if (!arguments.length) return [];

  let cats = 0;
  let arr = [];
  matrix.forEach((x, i) => {Array.prototype.push.apply(arr, x)});
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] == '^^') cats += 1;
  }
  return cats;
}
