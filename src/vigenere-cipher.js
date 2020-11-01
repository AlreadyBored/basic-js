const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type){
    if ( type || type === undefined){
      this.machineType = 'direct';
    } else {
      this.machineType = 'reverse';
    }
    
  }
  encrypt(message, key) {
    if (!message || !key ){
      throw 'Error';
    }
  
    let abc = ['a', 'b', 'c', 'd', 
               'e', 'f', 'g', 'h', 
               'i', 'j', 'k', 'l', 
               'm', 'n', 'o', 'p', 
               'q', 'r', 's', 't', 
               'u', 'v', 'w', 'x', 
               'y', 'z'];
    let lettercheck = /^[a-zA-Z]$/;
  
    let count = 0;
    for (let i = 0; i < message.length; i++){
      if (lettercheck.test(message[i])){
        count++;
      }
    }
  
    let cypherKeys = [];
    for (let i = 0; i < count; i++){
      if (i < key.length){
        cypherKeys.push(abc.indexOf(key[i].toLowerCase()));
      } else {
        cypherKeys.push(abc.indexOf(key[i % key.length].toLowerCase()));
      }
    }
  
    let cypheredMessage = '';
    let cypherKeyIndex = 0;
    for ( let i = 0; i < message.length; i++){
      if (lettercheck.test(message[i])){
        let newIndex;
        newIndex = (abc.indexOf(message[i].toLowerCase()) + cypherKeys[cypherKeyIndex]) % 26;
        cypherKeyIndex++;
        cypheredMessage += abc[newIndex];
        } else {
          cypheredMessage += message[i];
        }
      
    }
    if (this.machineType === 'direct') {
      return cypheredMessage.toUpperCase();
    }
    return cypheredMessage.toUpperCase().split('').reverse().join('');
  }    



  decrypt(encryptedMessage, key) {
    
    if (!encryptedMessage || !key ){
      throw 'Error';
    }
  
    let abc = ['a', 'b', 'c', 'd', 
               'e', 'f', 'g', 'h', 
               'i', 'j', 'k', 'l', 
               'm', 'n', 'o', 'p', 
               'q', 'r', 's', 't', 
               'u', 'v', 'w', 'x', 
               'y', 'z'];
    let lettercheck = /^[a-zA-Z]$/;
    let count = 0;
    
    for (let i = 0; i < encryptedMessage.length; i++){
      if (lettercheck.test(encryptedMessage[i])){
        count++;
      }
    }
  
    let cypherKeys = [];
    for (let i = 0; i < count; i++){
      if (i < key.length){
        cypherKeys.push(abc.indexOf(key[i].toLowerCase()));
      } else {
        cypherKeys.push(abc.indexOf(key[i % key.length].toLowerCase()));
      }
    }
  
    let uncypheredMessage = '';
    let cypherKeyIndex = 0;
    for ( let i = 0; i < encryptedMessage.length; i++){
      if (lettercheck.test(encryptedMessage[i])){
        let newIndex;
        if (cypherKeys[cypherKeyIndex] <= abc.indexOf(encryptedMessage[i].toLowerCase())){
          newIndex = (Math.abs(abc.indexOf(encryptedMessage[i].toLowerCase()) - cypherKeys[cypherKeyIndex]));
        } else {
          newIndex = 26 + abc.indexOf(encryptedMessage[i].toLowerCase()) - cypherKeys[cypherKeyIndex];
        }
        cypherKeyIndex++;
        uncypheredMessage += abc[newIndex];
        } else {
          uncypheredMessage += encryptedMessage[i];
        }
      
    }
    if (this.machineType === 'direct') {
      return uncypheredMessage.toUpperCase();
    }
    return uncypheredMessage.toUpperCase().split('').reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;