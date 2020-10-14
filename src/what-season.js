const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

    const season = ['spring', 'summer', 'autumn', 'winter', ];

    if (arguments.length > 0) {
        if (date !== null) {
            if (typeof(date) !== Date) {
                if (Object.prototype.toString.call(date) != '[object Date]') {
                    throw new Error('THROWN');
                }
                if (new Date(date) === 'Invalid Date') {
                    return Error;
                } else {
                    const monthNumber = date.getMonth();
                    /* console.log(monthNumber); */
                    switch (monthNumber) {
                        case 0:
                        case 1:
                        case 11:
                            return season[3];
                            /* console.log(season[3]); */
                            break;
                        case 2:
                        case 3:
                        case 4:
                            return season[0];
                            /* console.log(season[0]); */
                            break;
                        case 5:
                        case 6:
                        case 7:
                            return season[1];
                            /* console.log(season[1]); */
                            break;
                        case 8:
                        case 9:
                        case 10:
                            return season[2];
                            /* console.log(season[2]); */
                            break;
                        default:
                            break;

                    }
                }

            } else {
                /* console.log('Error'); */
                return Error;
            }
        } else {
            /* console.log('0'); */
            return Error;
        }

    } else {
        /*  console.log('Unable to determine the time of year!'); */
        return 'Unable to determine the time of year!';
    }

}

/* getSeason(null); */