import {
  NotImplementedError
} from '../extensions/index.js';

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
export default function sortByHeight(a) {
  const b = a.slice();
  let pos = [];
  let i = -1;
  while ((i = a.indexOf(-1, i + 1)) > -1) {
    pos.push(i);
  }
  const rpos = pos.slice();
  while (rpos.length) {
    b.splice(rpos.pop(), 1);
  }

  b.sort((a, b) => a - b);
  while (pos.length) {
    b.splice(pos.shift(), 0, -1);
  }
  return b;
}