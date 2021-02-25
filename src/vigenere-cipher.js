const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error();

    message = message.toUpperCase();
    key = key.toUpperCase();

    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let messageIndex = [];
    for (let char of message) {
      if (alphabet.indexOf(char) === -1) {
        messageIndex.push(char);
      } else {
        messageIndex.push(alphabet.indexOf(char));
      }
    }

    let keyIndex = [];
    if (key.length < message.length) {
      key = key.repeat(Math.ceil(message.length / key.length));
    }
    for (let char of key) {
      keyIndex.push(alphabet.indexOf(char));
    }

    let result = [];
    for (let m = 0, k = 0; m < message.length; m++, k++) {
      if (typeof messageIndex[m] == "number" && messageIndex[m] + keyIndex[k] >= 26) {
        result.push(alphabet[messageIndex[m] + keyIndex[k] - 26]);
      } else if (typeof messageIndex[m] == "number") {
        result.push(alphabet[messageIndex[m] + keyIndex[k]]);
      } else if (typeof messageIndex[m] != "number") {
        result.push(messageIndex[m]);
        k--;
      }
    } return (this.mode) ? result.join('') : result.reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error();

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let encryptedMessageIndex = [];
    for (let char of encryptedMessage) {
      if (alphabet.indexOf(char) === -1) {
        encryptedMessageIndex.push(char);
      } else {
        encryptedMessageIndex.push(alphabet.indexOf(char));
      }
    }

    let keyIndex = [];
    if (key.length < encryptedMessage.length) {
      key = key.repeat(Math.ceil(encryptedMessage.length / key.length));
    }
    for (let char of key) {
      keyIndex.push(alphabet.indexOf(char));
    }

    let result = [];
    for (let m = 0, k = 0; m < encryptedMessage.length; m++, k++) {
      if (typeof encryptedMessageIndex[m] == "number" && encryptedMessageIndex[m] - keyIndex[k] < 0) {
        result.push(alphabet[encryptedMessageIndex[m] - keyIndex[k] + 26]);
      } else if (typeof encryptedMessageIndex[m] == "number") {
        result.push(alphabet[encryptedMessageIndex[m] - keyIndex[k]]);
      } else if (typeof encryptedMessageIndex[m] != "number") {
        result.push(encryptedMessage[m]);
        k--;
      }
    } return (this.mode) ? result.join('') : result.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;