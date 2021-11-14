import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  let givenDate = date
  let season;

  if (date === undefined) {return 'Unable to determine the time of year!'}

  try {
    if (givenDate.getMonth() < 2 || givenDate.getMonth() > 10) {season = 'winter'; console.log('1')}
    if (givenDate.getMonth() < 5 && givenDate.getMonth() > 1) {season = 'spring'; console.log('2')}
    if (givenDate.getMonth() < 8 && givenDate.getMonth() > 4) {season = 'summer'; console.log('3')}
    if (givenDate.getMonth() < 11 && givenDate.getMonth() > 7) {season = 'autumn'; console.log('4')}    
  } catch {
    throw new Error ("Invalid date!")
  }


 

  return season
 }

// function getSeason1(date) {
//   let givenDate = date
//   let season;

//   if (date === undefined) {throw new Error ("Invalid date!")}

//   try {
//     if (givenDate.getMonth() < 2 || givenDate.getMonth() > 10) {season = 'winter'; console.log('1')}
//     if (givenDate.getMonth() < 5 && givenDate.getMonth() > 1) {season = 'spring'; console.log('2')}
//     if (givenDate.getMonth() < 8 && givenDate.getMonth() > 4) {season = 'summer'; console.log('3')}
//     if (givenDate.getMonth() < 11 && givenDate.getMonth() > 7) {season = 'autumn'; console.log('4')}    
//   } catch {
//     throw new Error ("Invalid date!")
//   }


 
//   console.log(season)
//   return season
// }
// let lll = new Date(2018, 4, 17, 11, 27, 4, 321)
// let lll1 = new Date(2018, 4, 17, 11, 27, 4, 321)
// let kkk = lll.getMonth()
// console.log(lll)
// console.log(lll1)
// console.log(kkk)
// getSeason1()