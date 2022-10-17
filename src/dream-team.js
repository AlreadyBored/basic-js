const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!members || typeof members !== 'object' || !Array.isArray(members)){
    return false
  };
  let filteredMembers = members.filter(item => typeof item === 'string');
  if (filteredMembers.length === 0){
    return false
  }
  return filteredMembers.map(item => item.trim()[0].toUpperCase()).sort().join('');
}

module.exports = {
  createDreamTeam
};


/*
Ваша задача — реализовать функцию createDreamTeam(members), 
которая возвращает имя вновь созданной команды (строка) на основе имен ее участников (массив). 
Имена членов должны быть строками. Значения другого типа следует игнорировать. 
В случае неправильного типа членов функция должна возвращать false. Имя члена команды может содержать пробелы. 
Например: createDreamTeam(['Мэтт', 'Энн', 'Дмитрий', 'Макс']) => 'ADMM' 
createDreamTeam(['Оливия', 1111, 'Лили', 'Оскар', true, null]) => 'LOO'
*/