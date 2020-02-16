module.exports = function countCats(matrix) {
  let cats = 0;
  for(let arr of matrix) {
    for(let el of arr) {
      if(el === '^^') {
        cats++;
      }
    }
  }
  return cats;
};

