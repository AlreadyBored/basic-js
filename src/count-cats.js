module.exports = function countCats(matrix) {
  let count = 0;
  matrix.forEach(e => e.forEach(q => q === '^^' ? count += 1 : count += 0));
  return count;
};
