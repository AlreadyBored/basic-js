const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  
  constructor(constant = true) {
    this.constant= constant;
  }

  encrypt(message, key) {
    const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const arr = [];
    let keyStep = -1;
    for (let i = 0; i < message.length; i++) {
      if (abc.indexOf(message[i].toUpperCase()) > -1) {
        keyStep++;
        let number = (abc.indexOf(message[i].toUpperCase()) + abc.indexOf(key[keyStep % key.length].toUpperCase())) % abc.length;
        arr.push(abc[number]);
      } else {
        arr.push(message[i])
      }
    }
    return this.constant ? arr.join('') : arr.reverse().join('');
  }
  decrypt(encryptedMessage, key) {
    const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const arr = [];
    let keyStep = -1;
    for (let i = 0; i < encryptedMessage.length; i++) {
      if (abc.indexOf(encryptedMessage[i].toUpperCase()) > -1) {
        keyStep++;
        let number = (abc.indexOf(encryptedMessage[i].toUpperCase()) + abc.length - abc.indexOf(key[keyStep % key.length].toUpperCase())) % abc.length;
        arr.push(abc[number])
      } else {
        arr.push(encryptedMessage[i])
      }
    }
    return this.constant ? arr.join('') : arr.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
