module.exports = function countCats(array) {
  let i = 0
  array.map(el => {
    el.map(e => {
      if (e === '^^') i++;
    })
  })
  return i;
};
