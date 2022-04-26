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
  mode=true;
  constructor(mode)
  {
    if (mode===false)
    {
      this.mode=mode;  
    }
  }
  encrypt(message,key) {
    this.testParam(message,key);
    message=message.toUpperCase();
    key=key.toUpperCase();
    let res="";
    for(let i=0,j=0;i<message.length;i++)
    {
      let currentCharCode=message.charCodeAt(i);
      if(currentCharCode>=65 && currentCharCode<=90)
      {
        let currKeyCode=key.charCodeAt(j % key.length);
        let newCode= ((currentCharCode - 65 + currKeyCode - 65) % 26) + 65;
        j++;
        res+=String.fromCharCode(newCode);
      }
      else{
        res+=message[i];
      }
    }
    return this.mode?res:res.split("").reverse().join("");
  }
  decrypt(message,key) {
    this.testParam(message,key);
    message=message.toUpperCase();
    key=key.toUpperCase();
    let res="";
    for(let i=0,j=0;i<message.length;i++)
    {
      let currentCharCode=message.charCodeAt(i);
      if(currentCharCode>=65 && currentCharCode<=90)
      {
        let currKeyCode=key.charCodeAt(j % key.length);
        let mm=currentCharCode >= currKeyCode?currentCharCode-currKeyCode:currentCharCode+26-currKeyCode;
        let newCode= (mm % 26) + 65;
        j++;
        res+=String.fromCharCode(newCode);
      }
      else{
        res+=message[i];
      }
    }
    return this.mode?res:res.split("").reverse().join("");
  }
  testParam(message,key)
  {
    if(message===undefined || key===undefined)
    {
      throw new Error( "Incorrect arguments!");
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
