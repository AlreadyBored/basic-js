module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    return {
        turns : 2**disksNumber - 1,
        seconds : this.turns / (turnsSpeed / 3600),
    }
}
