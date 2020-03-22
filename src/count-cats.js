module.exports = function countCats(backyard) {
  
  let newArr = [];
    for (let i = 0; i < backyard.length; i++) {
      for(let j = 0; j < backyard[i].length; j++){
          if(backyard[i][j] === '^^'){
              newArr.push(backyard[i][j]);
          }
       }
    }
  
  return newArr.length;
};
