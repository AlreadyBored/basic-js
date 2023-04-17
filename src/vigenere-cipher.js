const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    const messageLen = message.length;
    const keyLen = key.length;
    let keyIndex = 0;
    let encryptedMessage = '';

    for (let i = 0; i < messageLen; i++) {
      const charCode = message.charCodeAt(i);

      if (charCode < 65 || charCode > 90) {
        encryptedMessage += message[i];
        continue;
      }

      const shift = key.charCodeAt(keyIndex) - 65;
      const encryptedCharCode = ((charCode - 65 + shift) % 26) + 65;
      encryptedMessage += String.fromCharCode(encryptedCharCode);

      keyIndex++;
      if (keyIndex === keyLen) {
        keyIndex = 0;
      }
    }

    return this.isDirect ? encryptedMessage : encryptedMessage.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    const messageLen = encryptedMessage.length;
    const keyLen = key.length;
    let keyIndex = 0;
    let decryptedMessage = '';

    for (let i = 0; i < messageLen; i++) {
      const charCode = encryptedMessage.charCodeAt(i);

      if (charCode < 65 || charCode > 90) {
        decryptedMessage += encryptedMessage[i];
        continue;
      }

      const shift = key.charCodeAt(keyIndex) - 65;
      const decryptedCharCode = ((charCode - 65 - shift + 26) % 26) + 65;
      decryptedMessage += String.fromCharCode(decryptedCharCode);

      keyIndex++;
      if (keyIndex === keyLen) {
        keyIndex = 0;
      }
    }

    return this.isDirect ? decryptedMessage : decryptedMessage.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
