let counter = 1;
let result = [];
 
const arrLvl_2 = [
    1,
    [2],
    [2, [3]],
];
const arrLvl_3 = [
    1,
    [2, [3]],
    [2],
]
 
const calculateDepth = (arrLvl_2) => {
    for (const subArr of arrLvl_2) {
      if (Array.isArray(subArr)) {
        counter += 1;
        calculateDepth(subArr);
      }
      result.push(counter);
      counter = 1;
    }
    return Math.max.apply(null, result);
}
 
console.log(calculateDepth(arrLvl_2));
