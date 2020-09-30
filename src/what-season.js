
const getSeason = (date) => {
  // console.log(date.getTime());
  if (date === '' || date === undefined) {
    return 'Unable to determine the time of year!';
  }
  if (typeof date !== 'object' || date === null || !(date instanceof Date) || !date.getTime()) {
    throw new Error("Error")
  }
  if (date.toString().includes('Jan') || date.toString().includes('Feb') || date.toString().includes('Dec')) return 'winter';
  if (date.toString().includes('Mar') || date.toString().includes('Apr') || date.toString().includes('May')) return 'spring';
  if (date.toString().includes('Jun') || date.toString().includes('Jul') || date.toString().includes('Aug')) return 'summer';
  if (date.toString().includes('Sep') || date.toString().includes('Nov') || date.toString().includes('Oct')) return 'autumn';
};
module.exports = getSeason;