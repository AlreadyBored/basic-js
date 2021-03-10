const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  var count=0;
for (var i=0; i<backyard.length; i++){
  var currentArr=backyard[i];
  for (var j=0; j<currentArr.length; j++){
  if (currentArr[j] == ('^^')){
    count++;
  }

  }
}
console.log (count);
return count;
};
