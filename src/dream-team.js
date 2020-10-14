 const CustomError = require("../extensions/custom-error");

 module.exports = function createDreamTeam(arr) {
     if (Array.isArray(arr) === true) {
         const sortArr = arr.filter(element => typeof(element) === 'string').map(
             item => item = item.trim().toUpperCase()).sort().reverse();
         console.log(sortArr);
         const team = sortArr.reduce((accumulator, currentValue) => {
                 accumulator = `${currentValue[0] + accumulator}`
                 return accumulator;
             },
             '');

         /*  console.log(team); */
         return team;
     } else {
         /*  console.log(false); */
         return false;
     }



 }

 const arr3 = [
     ['David Abram'],
     ['Robin Attfield'],
     'Thomas Berry', ['Paul R.Ehrlich'],
     'donna Haraway',
     ' BrIaN_gOodWiN  ',
     {
         0: 'Serenella Iovino'
     },
     'Erazim Kohak',
     '  val_plumwood',
 ];

 /* createDreamTeam(arr3); */
 //'BDETV'