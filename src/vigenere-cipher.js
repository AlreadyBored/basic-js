class VigenereCipheringMachine {
    encrypt() {

        let text, key;
        var table = makeTable();
        var keyChar = 0;
        var message = new Array();
        while(message.length<text.length) {
            for(var i = 0; i < text.length; i++) {
                var row = table[0].indexOf(key[keyChar]);
                var col = table[0].indexOf(text[i]);
                message[message.length] = table[row][col];
                if (keyChar<key.length-1) {
                    keyChar++;
                } else {
                    keyChar = 0;
                }
            }
        }
        message = intsToCharList(message).join("");
        return message;    }

    decrypt() {
        throw 'Not implemented';
        // remove line with error and write your code here
    }
}

module.exports = VigenereCipheringMachine;
