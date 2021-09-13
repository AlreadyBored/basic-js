import { NotImplementedError } from '../extensions/index.js';



export default function countCats(arr) {
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
