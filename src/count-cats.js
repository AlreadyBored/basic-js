import { NotImplementedError } from '../extensions/index.js';

function countCats(arr){
    let count = 0
    arr.forEach(el => {
        for (let i = 0; i < el.length; i++) {
            if (el[i] == '^^') {
                count++
            }
        }
    });
    return count
}

export default function countCats(/* matrix */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
