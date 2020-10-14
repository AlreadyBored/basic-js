const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
        Array.isArray(arr);
        var newArr;
        newArr = arr.map((element, index) => {
            if (arr[index] === '--double-prev') {
                arr.splice(index, 1);

            }
            if (arr[index + 1] === '--double-prev') {
                arr[index + 1] = arr[index];

            }
            if (arr[index + 1] === '--double-next') {
                arr[index + 1] = arr[index + 2];
            }
            if (arr[index] === '--discard-prev') {
                arr.splice(index, 1);


            }
            if (arr[index + 1] === '--discard-prev') {

                arr[index + 1] = arr[index];
                arr.splice(index, 2);


            }
            if (arr[index + 1] === '--discard-next') {
                arr[index + 1] = arr[index];
                arr.splice(index + 1, 2);


            }


        });
        console.log(arr);
        return arr;

    }
    /* transform(['--double-prev', 1, 2, 3]); */