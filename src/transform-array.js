import { NotImplementedError } from "../extensions/index.js";

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    try {
      if (typeof arr[i] == "string") {
        switch (arr[i]) {
          case "--discard-next":
            i = i + 1;
            // newArr = arr.splice(i, 2);
            break;
          case "--discard-prev":
            // newArr.push(arr[i-1])
            newArr = newArr.splice(0, i - 1);
            break;
          case "--double-next":
            if (arr[i + 1]) {
              newArr.push(arr[i + 1]);
            }
            // newArr = arr.splice(0, 1, ar);
            break;

          case "--double-prev":
            if (arr[i - 1] || arr[i-2]) {
              if (arr[i-2]=="--discard-next") {break;}
              newArr.push(arr[i - 1]);
            }
            // newArr = arr.splice(i, 1, arr[i - 1]);
            break;
            default:
              newArr.push(arr[i])
        }
      } else {
        newArr.push(arr[i]);
      }
    } catch (error) {
      throw new Error("'arr' parameter must be an instance of the Array!");
    }
    // console.log(newArr)
  }

  return newArr
}
// console.log(transform(["--double-prev",1, 2, 3,  4, 5]), [1, 2, 3, 4, 5]);
// console.log(transform(["--discard-prev",1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
// console.log(transform([1, 2, 3, "--double-next", 4, 5]), [1, 2, 3, 4, 4, 5]);
// console.log(transform([1, 2, 3, "--double-prev", 4, 5]), [1, 2, 3, 3, 4, 5]);
// console.log(transform([1, 2, 3, "--discard-prev", 4, 5]), [1, 2, 4, 5]);
// console.log(transform([1, 2, 3, "--discard-next", 4, 5]), [1, 2, 3, 5]);
// console.log(((transform([])), []))
// console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]),[1,2,3,4,5])
// console.log(transform([1, 2, "two", 3, '--double-next', 1337, '--double-prev', 4, 5]), [1, 2, 3, 1337, 1337, 1337, 4, 5])