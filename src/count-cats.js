const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
  
var counterCat = 0;
let ears = '^^';


for(var i = 0; i < matrix.length; i++){

  for(var j = 0; j < matrix[i].length; j++){

    if ( matrix[i][j] === ears ) {counterCat += 1 ; }

  }

}

return counterCat;

};
