const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let x = arr.slice()
  let result = arr.sort(function (a, b) {
    return a - b
  }).filter(function (f) {
    return f !== -1
  })

  for (let i = 0; i < x.length; i++) {
    if (x[i] === -1) {
      result.splice(i, 0, -1)
    }
  }
  return result
}

sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])

module.exports = {
  sortByHeight,
}
