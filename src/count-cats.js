module.exports = function countCats(mat) {

    let count = 0;
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] == "^^") {
                count++
            }
        }
    }

    return count;

};