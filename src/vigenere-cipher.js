class VigenereCipheringMachine {
  constructor (direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
      let encryptedMessage = [];
      let counterKeyLetters = 0;

      if (message === undefined || key === undefined) throw Error;

      if (this.direct === false) key = key.split('').reverse().join('');

      for (i = 0; i < message.length; i++) {
        if (message[i].charCodeAt(0) >= 65 && message[i].charCodeAt(0) <= 90
            || message[i].charCodeAt(0) >= 97 && message[i].charCodeAt(0) <= 122) {
          let charIndex = message[i].toUpperCase().charCodeAt(0) + key[counterKeyLetters % key.length].toUpperCase().charCodeAt(0) - 65;
          if (charIndex > 90) charIndex = charIndex - 91 + 65;
          encryptedMessage.push(String.fromCharCode(charIndex));
          counterKeyLetters++;
        }
        else {
          encryptedMessage.push(message[i]);
        }
      }

      return encryptedMessage.join('');
  }

  decrypt(encryptedMessage, key) {
      let message = [];
      let counterKeyLetters = 0;

      if (this.direct === false) {
        encryptedMessage = encryptedMessage.split('').reverse().join('');
        key = key.split('').reverse().join('');
      }

      if (encryptedMessage === undefined || key === undefined) throw Error;


      for (i = 0; i < encryptedMessage.length; i++) {
        if (encryptedMessage[i].charCodeAt(0) >= 65 && encryptedMessage[i].charCodeAt(0) <= 90
            || encryptedMessage[i].charCodeAt(0) >= 97 && encryptedMessage[i].charCodeAt(0) <= 122) {
          let charIndex = 65 + encryptedMessage[i].toUpperCase().charCodeAt(0) - key[counterKeyLetters % key.length].toUpperCase().charCodeAt(0);
          if (charIndex < 65) charIndex = 91 - (65 - charIndex);
          message.push(String.fromCharCode(charIndex));
          counterKeyLetters++;
        }
        else {
          message.push(encryptedMessage[i]);
        }
      }

      if (this.direct === false) message = message.reverse();

      return message.join('');
  }
}

module.exports = VigenereCipheringMachine;
