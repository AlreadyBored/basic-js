const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // throw new CustomError('Not implemented');
if (!Array.isArray(arr)){
  throw new Error('THROW')
}
// let newArray=arr.forEach(e=>e==='--discard-next'? )
};
