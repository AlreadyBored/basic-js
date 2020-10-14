const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {


  constructor( direct ){

    if ( arguments.length === 0 ) this.direct = true;
    else this.direct = direct;
//     принимает true (или ничего), чтобы создать прямую машину

// Прямая машина просто шифрует и дешифрует строку, переданную в нее

// false, чтобы создать обратную машину
// обратная машина возвращает 
// перевернутую задом наперед строку после шифрования и дешифрования.

  }

  encrypt(message, key) {
    const characters = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    const N = characters.length;

    const input = message.toUpperCase();
    const maxIndexInput = input.length - 1;

    const keyword = key.toUpperCase();
    const maxIndexKeyword = keyword.length - 1;

    let result = "";
    let indexKeyword = 0;

    for (let indexInput=0; indexInput <= maxIndexInput; indexInput++) {
      let fromInput = characters.indexOf(input[indexInput]);

      if (fromInput === -1) result += input[indexInput];
      else {
        let c = (fromInput + characters.indexOf(keyword[indexKeyword])) % N;

        result += characters[c];

        if (indexKeyword === maxIndexKeyword) indexKeyword = 0;
        else indexKeyword += 1;
      }
    }
//    console.log( 'encrypt: result= ' + result );

    if( this.direct ) return result;
    else return result.split('').reverse().join('');
  }

  decrypt(message, key) {
    const characters = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    const N = characters.length;

    const input = message.toUpperCase();
    const maxIndexInput = input.length - 1;

    const keyword = key.toUpperCase();
    const maxIndexKeyword = keyword.length - 1;

    let result = "";
    let indexKeyword = 0;

    for (let indexInput=0; indexInput <= maxIndexInput; indexInput++) {
      let fromInput = characters.indexOf(input[indexInput]);

      if (fromInput === -1) result += input[indexInput];
      else {
        let c = (fromInput + N - characters.indexOf(keyword[indexKeyword])) % N;

        result += characters[c];

        if (indexKeyword === maxIndexKeyword) indexKeyword = 0;
        else indexKeyword += 1;
      }
    }
//    console.log( 'decrypt: result= ' + result );

    if( this.direct ) return result;
    else return result.split('').reverse().join('');

  }
}

module.exports = VigenereCipheringMachine;
