const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
    return arr.flat().reduce((accumulator, currentValue) => {
        if (currentValue === '^^') {
            accumulator += 1
        }
        return accumulator;
    }, 0);

}