const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  var steps=2**disksNumber-1;
  var time = Math.floor(steps/turnsSpeed*3600);
  
  var output = {turns : steps,
    seconds : time
  }
return output;
  }
  