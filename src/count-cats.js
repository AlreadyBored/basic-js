module.exports = function countCats(/* matrix */) {
  // remove line with error and write your code here
  let count = 0
  arguments[0].forEach(item => {
    item.forEach(element => {
      if (element === "^^") count++
    })
  })
  return count
};

