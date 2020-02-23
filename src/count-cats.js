module.exports = function countCats(array) {
  let count=0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] == '^^') {
                count = count + 1;
            }
        }
    }
    return  count
};
