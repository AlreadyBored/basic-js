 const CustomError = require("../extensions/custom-error");

 const MODERN_ACTIVITY = 15;
 const HALF_LIFE_PERIOD = 5730;

 module.exports = function dateSample(str) {
     if (x = isFinite(Number(str))) {
         /* console.log(false); */
         return false;
     } else {
         if (Number(str) < 0) {
             /* console.log(false); */
             return false;

         } else {
             if (isNaN(Number(str)) === true) {
                 /* console.log(false); */
                 return false;
             } else {
                 if (typeof(str) !== 'string') {
                     /* console.log(false); */
                     return false;
                 } else {
                     const x = Number(str);
                     const p = (0.693 / HALF_LIFE_PERIOD);
                     const v = Math.log(MODERN_ACTIVITY / x);
                     const result = Math.ceil((v / p));
                     /*   console.log(result); */
                     return result;
                 }

             }

         }

     }

 }