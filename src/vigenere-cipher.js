class VigenereCipheringMachine {

  constructor(direct = true) {
      this.direct = direct;
  }

  encrypt(str, key) {
     return this.crypt(str, key, 'encrypt');
  }

  decrypt(str, key) {
      return this.crypt(str, key, 'decrypt');
  }

  crypt(str, key, mode){
      if (!str && !key) throw Error()
      str = str.toUpperCase();
      key = key.toUpperCase();
      const res = [];
      for (let i = 0, j = 0; i < str.length; i++) {
          if(str[i].match(/[A-Z]/)){
              if(mode=='decrypt') {
                  res.push(String.fromCharCode((str[i].charCodeAt(0) - 'A'.charCodeAt(0) + (26 - (key[j % key.length].charCodeAt(0) - 'A'.charCodeAt(0)))) % 26 + 'A'.charCodeAt(0)));
              } else {
                  res.push(String.fromCharCode((str[i].charCodeAt(0) - 'A'.charCodeAt(0) + (key[j % key.length].charCodeAt(0) - 'A'.charCodeAt(0))) % 26 + 'A'.charCodeAt(0)));
              }
              j++
          } else {
              res.push(str[i])
          } 
      }
      return  this.direct ? res.join('') : res.reverse().join('')
  }

}
module.exports = VigenereCipheringMachine;