const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {

    let done = 0;
    let arr = matrix;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === '^^') {
                done += 1
            }
        }
    }
    if (done === 0) {
        throw new CustomError('Not implemented');
    } else {
        return done
    }
};
