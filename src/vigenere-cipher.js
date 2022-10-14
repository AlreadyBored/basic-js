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
  _incorrectMessage = 'Incorrect arguments!'

  constructor(isDirectmachine = true) {
    this.isDirectmachine = isDirectmachine
  }

  encrypt(message, key) {
    throw new NotImplementedError('Not implemented');
    if(!message || !key) {
      throw new Error(this._incorrectMessage);
    }
  }

  decrypt(encryptedMessage , key) {
    throw new NotImplementedError('Not implemented');
    if(!encryptedMessage || !key) {
      throw new Error(this._incorrectMessage);
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
