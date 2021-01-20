module.exports = function getSeason(date) {
  
  if (date == null || date == undefined || date == false) {
    return 'Unable to determine the time of year!';
  } else if (Object.prototype.toString.call(date) !== '[object Date]') throw Error;

  let month = date.getMonth();

  //console.log(i);
  //console.log(typeof date);
  //console.log(Date.parse(date));

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

  if ( arr[1] == 'Dec' || arr[1] == 'Feb' || arr[1] == 'Jan') return 'winter'
  if ( arr[1] == 'Mar' || arr[1] == 'May' || arr[1] == 'Apr') return 'spring'
  if ( arr[1] == 'Jun' || arr[1] == 'Jul' || arr[1] == 'Aug') return 'summer'
  if ( arr[1] == 'Sep' || arr[1] == 'Oct' || arr[1] == 'Nov') return 'autumn'
  
*/
};
