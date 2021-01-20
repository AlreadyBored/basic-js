module.exports = function getSeason(date) {

<<<<<<< HEAD
  let month = date.getMonth();
  //console.log(test);
  //console.log(n);
  console.log(Date.parse(date));
  
    if ( Date.parse(date) === NaN) throw new Error('Unable to determine the time of year!')
    if ( month == 0 || month == 1 || month == 11) return 'winter'
    if ( month == 2 || month == 3 || month == 4) return 'spring'
    if ( month == 5 || month == 6 || month == 7) return 'summer'
    if ( month == 8 || month == 9 || month == 10) return 'autumn'

/*
  let str = date.toString();
  let arr = str.split(' ');
  console.log(date);
  console.log(str);
  console.log(arr);


  if ( str == 'foo') return 'Error'

  if ( arr[1] == 'Dec' || arr[1] == 'Feb' || arr[1] == 'Jan') return 'winter'
  if ( arr[1] == 'Mar' || arr[1] == 'May' || arr[1] == 'Apr') return 'spring'
  if ( arr[1] == 'Jun' || arr[1] == 'Jul' || arr[1] == 'Aug') return 'summer'
  if ( arr[1] == 'Sep' || arr[1] == 'Oct' || arr[1] == 'Nov') return 'autumn'
  
*/
=======
  if (date === undefined) return 'Unable to determine the time of year!'
  
  if( !date.getMilliseconds()) {throw Error}
  let x = date.getMonth();

  if ( x == 11 || x == 1 || x == 0) return 'winter'
  if ( x == 2 || x == 3 || x == 4) return 'spring'
  if ( x == 5 || x == 6 || x == 7) return 'summer'
  if ( x == 8 || x == 9 || x == 10) return 'autumn'
  
>>>>>>> 8b487667a0b3207317e2e884cdc4bb9c6265f3de
};
