
const calculateHanoi = ( disksNumber, turnsSpeed) => {
  const sum = Math.pow(2, disksNumber) - 1;
  const time = Math.floor(sum / turnsSpeed * 3600)
  return {turns: sum, seconds: time}
};

module.exports = calculateHanoi

console.log(calculateHanoi(5, 4074));