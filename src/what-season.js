module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!'
  if (!date.getTime()) throw new Error()
  
  let season = Math.floor((date.getMonth() + 1) / 12 * 4) % 4
  return ['winter', 'spring', 'summer', 'autumn'][season]
}
