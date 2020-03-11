module.exports = 
function getSeason(date) {
  res = [];
  //console.log(typeof(date));
  switch (typeof(date)){
    case 'string':
      {
        //console.log(date);
        if (date === 'winter' || 'autumn' || 'summer' || 'spring')
          break;
        else 
          res = date;
          break;
      }
    case 'object':
      {
        res = checkSeason(date);
        break;
      }
    default: res = 'Unable to determine the time of year!';
  }
  return res;
}

function checkSeason(date){
  let month = date.toString().split(' ')[1];
  let res = 0;
  //console.log(typeof(+month));
  if (typeof(+month) === 'NaN' || typeof(+month) === 'undefined'){
    res = 'Unable to determine the time of year!';} 
  else {
    switch (month){
      case 'Jul':
      case 'Jun':
      case 'Aug':
        {
          res='summer';
          break;
        }
      case 'Sep':
      case 'Oct':
      case 'Nov':
        {
          res='autumn';
          break;
        }
      case 'Dec':
      case 'Jan':
      case 'Feb':
        {
          res='winter';
          break;
        }
      case 'Mar':
      case 'Apr':
      case 'May':
        {
          res='spring';
          break;
        }
    }
  return res;
  }
};
/*
let date = 'winter';

let date = new Date(20192701);
console.log(getSeason(date));



const deeperFakeDate = {
  toString() {
      return Date.prototype.toString.call(new Date());
  },
  getMonth() {
      return Date.prototype.getMonth.call(new Date());
  },
  getFullYear() {
      return Date.prototype.getFullYear.call(new Date(1994, 1, 2, 3, 4, 5));
  },
  getDate() {
      return Date.prototype.getDate.call(new Date(2020, 0, 3, 4, 5, 6));
  },
  getHours() {
      return Date.prototype.getHours.call(new Date(1978, 2, 4, 5, 6, 7));
  },
  getMinutes() {
      return Date.prototype.getMinutes.call(new Date(202, 3, 5, 6, 7, 8));
  },
  getSeconds() {
      return Date.prototype.getSeconds.call(new Date(1, 4, 6, 7, 8, 9));
  },
  getMilliseconds() {
      return Date.prototype.getMilliseconds.call(new Date(2019, 7, 8, 9, 10, 11));
  },
  getDay() {
      return Date.prototype.getDay.call(new Date(1812, 8, 9, 10, 11, 12));
  }
};
let date4 = new Date (deeperFakeDate);
console.log(date4.toString());*/