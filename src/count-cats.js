const countCats = (arrs) => {
  let result = 0;
  for (const arr in arrs) {
    if (arrs.hasOwnProperty(arr)) {
      const elem = arrs[arr];
      for (let i = 0; i < elem.length; i++) {
        if (elem[i] == "^^") {
          result++
        }
      }
    }
  }
  return result;
}

module.exports = countCats ;