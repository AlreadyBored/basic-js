const CustomError = require("../extensions/custom-error");
module.exports = function createDreamTeam(members) {
let array = [];
if(!Array.isArray(members) || members.length===0){
  return false;
}
for(let i=0; i < members.length; i++){
    if (typeof members[i]==="string"){
      array.push(members[i].trim().charAt(0).toUpperCase());
    }
  }
  return  String(array.sort().join(''));
};