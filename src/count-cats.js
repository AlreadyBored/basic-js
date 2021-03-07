const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
 // throw new CustomError('Not implemented');
 let kk=0;
 for (let i = 0; i < arr.length; i++) {
	for (let j = 0; j < arr[i].length; j++) {
		if(arr[i][j]=="^^")
    kk++;
	}
}
if(kk)
{
  return kk;
}
else
{
  return 0;
}

};
