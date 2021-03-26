const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  direct = true
  constructor(type) {
    if (type === false) {
      this.direct = false
    }
  }
  encrypt(string, key) {
    if (!string||!key){
        throw new Error("")
    }
    let message='',
    j=0;
    key = key.toUpperCase();
    string = string.toUpperCase();

    for (let i = 0;  i < string.length; i++) {
      if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        message += String.fromCharCode((string.charCodeAt(i)- 65 + key.charCodeAt(j % key.length) - 65) % 26 + 65);
        j++;
      } else {
        message += string[i];
      }
    }
    if (this.direct) {
      return message;
    } else {
      return message.split('').reverse().join('');
    }
  }
  decrypt(string, key) {
    if (!string||!key){
      throw new Error("")
    }
    let message='',
    j=0;
    key = key.toUpperCase();
    string = string.toUpperCase();

    for (let i = 0;  i < string.length; i++) {
      if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        message += String.fromCharCode((string.charCodeAt(i)+ 26 - key.charCodeAt(j % key.length)) % 26 + 65);
        j++;
      } else {
        message += string[i];
      }
    }
    if (this.direct) {
      return message;
    } else {
      return message.split('').reverse().join('');
    }
  }
  }    
  
    


  


module.exports = VigenereCipheringMachine;
