import { NotImplementedError } from '../extensions/index.js';

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
export default function createDreamTeam(member) {
  let memberNames = [];
  let result = '';

  if (member === null || undefined) {return false}

  for (let i = 0; i < member.length; i++){
    if (typeof(member[i]) === 'string') {
    member[i] = member[i].replace(/\s/g, "");
    memberNames.push(member[i][0].toUpperCase());
    } 
  }
  
  memberNames = memberNames.sort();  
  result = memberNames.join('');
  
  return result
}

// const alphaIndexIn = str => {
//   if (str === 'A' || 'a'){return 1}
//   if (str === 'B' || 'b'){return 2}
//   if (str === 'C' || 'c'){return 3}
//   if (str === 'D' || 'd'){return 4}
//   if (str === 'E' || 'e'){return 5}
//   if (str === 'F' || 'f'){return 6}
//   if (str === 'G' || 'g'){return 7}
//   if (str === 'H' || 'h'){return 8}
//   if (str === 'I' || 'i'){return 9}
//   if (str === 'J' || 'j'){return 10}
//   if (str === 'K' || 'k'){return 11}
//   if (str === 'L' || 'l'){return 12}
//   if (str === 'M' || 'm'){return 13}
//   if (str === 'N' || 'n'){return 14}
//   if (str === 'O' || 'o'){return 15}
//   if (str === 'P' || 'p'){return 16}
//   if (str === 'Q' || 'q'){return 17}
//   if (str === 'R' || 'r'){return 18}
//   if (str === 'S' || 's'){return 19}
//   if (str === 'T' || 't'){return 20}
//   if (str === 'U' || 'u'){return 21}
//   if (str === 'V' || 'v'){return 22}
//   if (str === 'W' || 'w'){return 23}
//   if (str === 'X' || 'x'){return 24}
//   if (str === 'Y' || 'y'){return 25}
//   if (str === 'Z' || 'z'){return 26}
// }

// const alphaIndexOut = str => {
//   if (str === 1){return 'A'}
//   if (str === 2){return 'B'}
//   if (str === 3){return 'C'}
//   if (str === 4){return 'D'}
//   if (str === 5){return 'E'}
//   if (str === 6){return 'F'}
//   if (str === 7){return 'G'}
//   if (str === 8){return 'H'}
//   if (str === 9){return 'I'}
//   if (str === 10){return 'J'}
//   if (str === 11){return 'K'}
//   if (str === 12){return 'L'}
//   if (str === 13){return 'M'}
//   if (str === 14){return 'N'}
//   if (str === 15){return 'O'}
//   if (str === 16){return 'P'}
//   if (str === 17){return 'Q'}
//   if (str === 18){return 'R'}
//   if (str === 19){return 'S'}
//   if (str === 20){return 'T'}
//   if (str === 21){return 'U'}
//   if (str === 22){return 'V'}
//   if (str === 23){return 'W'}
//   if (str === 24){return 'X'}
//   if (str === 25){return 'Y'}
//   if (str === 26){return 'Z'}
// }



let TeamNames = [null];
console.log(typeof(TeamNames[0]) === {})

function createDreamTeam1(member) {
  let memberNames = [];
  let result = '';
  if (member[0] === null) {console.log('asdasdadsa')}
  // console.log(Array.isArray(TeamNames))
  // console.log(typeof(TeamNames[1]) === 'string')
  // console.log(TeamNames[1][0].toUpperCase())
  for (let i = 0; i < member.length; i++){
    let ii = 0;
    
    // if (member[i][ii] === ' '){ii = ii + 1}
    console.log(ii)
    if (typeof(member[i]) === 'string') {
    member[i] = member[i].replace(/\s/g, "")
    memberNames.push(member[i][ii].toUpperCase());
    }
  }
  memberNames = memberNames.sort();  
  result = memberNames.join('');
    console.log(result)
}
createDreamTeam1(TeamNames)




// const alpha = Array.from(Array(26)).map((e, i) => i + 65);
// const alphabet = alpha.map((x) => String.fromCharCode(x));
// console.log(alphabet);
