const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let res=0;
  let dStr=n+"";
  for(let i=0;i<dStr.length;i++)
  {
   let newStr="";
   if (i>0)
   {
    newStr=dStr.substring(0,i);
    if(i<dStr.length-1)
    {
      newStr+=dStr.substring(i+1);
    }
   } 
   else{
     newStr=dStr.substring(i+1);
   }
   res=res<(newStr*1)?newStr*1:res;
  }
  return res;
}

module.exports = {
  deleteDigit
};
