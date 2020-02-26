module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let turns = (2**disksNumber);
    let seconds =  turns / (turnsSpeed / 3600);
    return {turns, seconds }
}