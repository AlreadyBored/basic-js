const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (arr === null) return false;
  if (typeof arr == "undefined") return false;
  if (!Array.isArray(arr)) throw "Не массив";

  /*
--discard-next исключает следующий за ней элемент исходного массива из преобразованного массива.
--discard-prev исключает предшествующий ей элемент исходного массива из преобразованного массива.
--double-next удваивает следующий за ней элемент исходного массива в преобразованном массиве.
--double-prev удваивает предшествующий ей элемент исходного массива в преобразованном массиве.
*/
  var result = arr.slice();

  /* console.log("start: " + result); */

  var currentElementResult = 0;

  while (currentElementResult < result.length) {
    /* console.log( "result[currentElementResult]: " + result[currentElementResult] ); */

    switch (result[currentElementResult]) {
      case "--discard-next":
        if (currentElementResult + 1 >= result.length) {
          currentElementResult += 1;
          break;
        } /* достигли конца массива */
        if (
          result[currentElementResult + 1] === "--discard-next" ||
          result[currentElementResult + 1] === "--discard-prev" ||
          result[currentElementResult + 1] === "--double-next" ||
          result[currentElementResult + 1] === "--double-prev"
        ) {
          currentElementResult += 1;
          break;
        }

        result.splice(currentElementResult + 1, 1); /* удаляем элемент */
        currentElementResult += 1;
        /*     console.log( '--discard-next выполнен: ' + result ); */
        break;

      case "--discard-prev":
        if (currentElementResult === 0) {
          currentElementResult += 1;
          break;
        }
        if (
          result[currentElementResult - 1] === "--discard-next" ||
          result[currentElementResult - 1] === "--discard-prev" ||
          result[currentElementResult - 1] === "--double-next" ||
          result[currentElementResult - 1] === "--double-prev"
        ) {
          currentElementResult += 1;
          break;
        }
        result.splice(currentElementResult - 1, 1); /* удаляем элемент */
        currentElementResult += 1;
        /*     console.log( '--discard-prev выполнен: ' + result ); */
        break;

      case "--double-next":
        if (currentElementResult + 1 >= result.length) {
          currentElementResult += 1;
          break;
        } /* достигли конца массива */
        if (
          result[currentElementResult + 1] === "--discard-next" ||
          result[currentElementResult + 1] === "--discard-prev" ||
          result[currentElementResult + 1] === "--double-next" ||
          result[currentElementResult + 1] === "--double-prev"
        ) {
          currentElementResult += 1;
          break;
        }

        var dubl = result[currentElementResult + 1];

        result.splice(
          currentElementResult + 1,
          0,
          dubl
        ); /* дублируем элемент */
        currentElementResult += 2;
        /*     console.log( '--double-next выполнен: ' + result ); */
        break;

      case "--double-prev":
        if (currentElementResult === 0) {
          currentElementResult += 1;
          break;
        }
        if (
          result[currentElementResult - 1] === "--discard-next" ||
          result[currentElementResult - 1] === "--discard-prev" ||
          result[currentElementResult - 1] === "--double-next" ||
          result[currentElementResult - 1] === "--double-prev"
        ) {
          currentElementResult += 1;
          break;
        }

        var dubl = result[currentElementResult - 1];

        result.splice(
          currentElementResult - 1,
          0,
          dubl
        ); /* дублируем элемент */
        currentElementResult += 2;
        /*     console.log( '--double-prev выполнен: ' + result ); */
        break;

      default:
        currentElementResult += 1;
    }
  }

  result = result.filter((val) => val !== "--discard-next");
  result = result.filter((val) => val !== "--discard-prev");
  result = result.filter((val) => val !== "--double-next");
  result = result.filter((val) => val !== "--double-prev");

  return result;
};
