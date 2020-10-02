const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  /* 
 diskNumber — это число дисков, а 
 turnsSpeed — скорость перемещения дисков (в ходах в час). Оба параметра являются числами (тип number)

Функция calculateHanoi возвращает объект с 2 свойствами:

turns (минимальное число (тип number) ходов, необходимое для решения головоломки)
seconds (минимальное число (тип number) секунд, необходимое для решения головоломки при заданной скорости; 
должно быть целым числом, полученным в результате округления результата расчетов в меньшую (floor) сторону)
 */

  let numSteps = Math.pow(2, disksNumber) - 1;

  let minTime = Math.floor((numSteps / turnsSpeed) * 60 * 60);

  return { turns: numSteps, seconds: minTime };
};
