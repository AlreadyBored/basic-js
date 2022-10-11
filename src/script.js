let backyard = [
    ["^^", ".", null, 0, false, "", NaN, "^^", 2, true, "dasdas", 1],
    [2, null, 0, 1, ".", "dasdas", true, NaN, "", false, "^^", "^^"],
    [false, ".", 1, 0, "^^", null, "", 2, "dasdas", "^^", NaN, true],
    [".", false, 1, null, NaN, 2, 0, "dasdas", true, "^^", "", "^^"],
    [false, ".", 1, 0, "^^", true, null, "^^", "", NaN, 2, "dasdas"],
    [false, NaN, 1, 0, ".", "^^", null, true, "dasdas", "^^", 2, ""],
    [null, 1, NaN, true, ".", "^^", "^^", 2, "", false, "dasdas", 0],
    [null, NaN, "", false, ".", 1, 0, "^^", "dasdas", true, 2, "^^"],
]

function countCats(backyard) {
    let count = 0;
    for (let row in backyard) {
        count += backyard[row].filter((el)=> el === '^^').length;
    }
    return count;
}

console.log(countCats(backyard));