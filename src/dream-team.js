import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(arr) {
    if (Array.isArray(arr)) {
        let finalArray = []
        arr.forEach(el => {
            if (typeof el === "string") {
                finalArray.push(el[0])
            }
        })

                
        return finalArray.sort()
    }else{
        return false
    }
}
