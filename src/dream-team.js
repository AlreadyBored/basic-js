const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
    let mass = members;
    let arr = [];
    if (Array.isArray(mass)) {
        for (let key of mass) {
            if (typeof key === 'string') {
                arr.push(key.toUpperCase().match(/\S/))
            }
        }
        return arr.sort().join('')
    } else {
        return false
    }

}
