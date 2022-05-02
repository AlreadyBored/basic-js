 module.exports = function calculateHanoi(diskNumber,turnsSpeed) {
        let turns = Math.pow(2, diskNumber);
        let seconds = turns / (turnsSpeed  / 3600);
        return {turns: turns, seconds: seconds};
        }
