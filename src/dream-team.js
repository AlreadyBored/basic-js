const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(array) {
  var output='';
var count=0;
var result;
if (array.length===0){
  result= false;
  return result;
}else {

  for (var i=0; i<array.length; i++){
      
      if (typeof array[i] =='string'){
        count ++;
          output=output + array[i].charAt(0);
      }

      }
     output=output.split('').sort(compareS).join('').toUpperCase() ;
     return output;
    }    
}
function compareS(a, b) {
  if (a > b) {
  return 1;
  } else if (a === b) {
  return 0;
  } else {
  return -1;
  }
    }
