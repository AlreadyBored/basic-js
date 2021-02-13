function encrypt(message, key) {
  const alphabet = {
    'A': 0,
    'B': 1,
    'C': 2,
    'D': 3,
    'E': 4,
    'F': 5,
    'G': 6,
    'H': 7,
    'I': 8,
    'J': 9,
    'K': 10,
    'L': 11,
    'M': 12,
    'N': 13,
    'O': 14,
    'P': 15,
    'Q': 16,
    'R': 17,
    'S': 18,
    'T': 19,
    'U': 20,
    'V': 21,
    'W': 22,
    'X': 23,
    'Y': 24,
    'Z': 25,
  };

  const reverseAlphabet = {
    0: 'A',
    1: 'B',
    2: 'C',
    3: 'D',
    4: 'E',
    5: 'F',
    6: 'G',
    7: 'H',
    8: 'I',
    9: 'J',
    10: 'K',
    11: 'L',
    12: 'M',
    13: 'N',
    14: 'O',
    15: 'P',
    16: 'Q',
    17: 'R',
    18: 'S',
    19: 'T',
    20: 'U',
    21: 'V',
    22: 'W',
    23: 'X',
    24: 'Y',
    25: 'Z',
  };


  message = message.toUpperCase();
  key = key.toUpperCase();
  console.log(message);
  const keyNumber = [...key].map(item => alphabet[item]);

  for (let i = 0; keyNumber.length < message.length; i++) {
    if (i > key.length) {
      i = 0;
    } else {
      keyNumber.push(keyNumber[i])
    }
  }

  const encryptMessage = [];

  [...message].forEach((item, index) => {
    if (item === ' ') encryptMessage.push(' ');
    if (alphabet[item] === undefined) {
      return 
    }
    const sum = keyNumber[index] + alphabet[item];
    console.log('sum', keyNumber[index], alphabet[item], sum);
    
    if (sum > 25) {
      encryptMessage.push(reverseAlphabet[sum - 26]);
    } else {
      encryptMessage.push(reverseAlphabet[sum]);
    }

  })
  console.log('encryptMessage', encryptMessage);


  console.log(keyNumber);

}

//'AEIHQX SX DLLU!'


encrypt('attack at dawn', 'alphonse')