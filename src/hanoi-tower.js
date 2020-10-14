const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    const calcTurns = (2 ** disksNumber) - 1;
    const calcSeconds = Math.floor((3600 * calcTurns) / turnsSpeed);
    const calculatedAnswer = {};
    calculatedAnswer.turns = calcTurns;
    calculatedAnswer.seconds = calcSeconds;
    return calculatedAnswer;
}

/* calculateHanoi(9, 4308); */