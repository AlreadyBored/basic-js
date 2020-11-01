const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let objHanoi = {};
    objHanoi.turns = Math.pow(2,disksNumber)-1;
    objHanoi.seconds = Math.trunc(objHanoi.turns*3600/turnsSpeed);
    return objHanoi;
};
