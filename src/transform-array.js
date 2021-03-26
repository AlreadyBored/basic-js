const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    Array.isArray(arr);
    let newArr;
        newArr = arr.map((element, index) => {
            if (arr[index] === undefined) {
                arr.splice(index, 1);
            }
            if (arr[index] === '--double-prev' && index > 0) {
                arr.splice(index, 1, arr[index - 1]);
            } else if ( index === 0) {
                arr.splice(index, 1);
            }
            if (arr[index] === '--double-next' && index + 1 < arr.length && index != 0){
                arr.splice(index, 1, arr[index + 1]);
            } else if ( index === arr.length -1) {
                arr.splice(index, 1);
            } else if ( index === 0) {
                arr.splice(index, 1, arr[index], arr[index], );
            }

            /* if (arr[index] === '--discard-prev' && index > 0 && index + 1 < arr.length) {
                arr.splice(index, 2);
            } else if (index === 0) {
                arr.splice(index, 1);
            } else if (index === arr.length - 1) {
                arr.splice(index, 2);
            } */

            if (arr[index] === '--discard-prev') {
                arr.splice(index, 1);


            }
            if (arr[index + 1] === '--discard-prev') {

                arr[index + 1] = arr[index];
                arr.splice(index, 2);


            }
            if (arr[index] === '--discard-next') {
                arr.splice(index, 1);
            }
            if (arr[index + 1] === '--discard-next') {
                arr[index + 1] = arr[index];
                arr.splice(index + 1, 2);
            }



        });
        /* console.log(arr); */
        return arr;

    }
    /* transform(['--discard-prev', "1", 2, '--discard-prev',  '3', 4, 'discard-prev']); */