const { CONSTANTS } = require('./constants.js');

const { SPECIAL_PROP_VALUE, CORRECT_RESULT_MSG, INCORRECT_RESULT_MSG } = CONSTANTS;

const checkForThrowingErrors = function (testsFuncs, expectedErrMsg) {
    return testsFuncs.map(f => {
        try {
            f();
        } catch (err) {
            if (err._specialProp === SPECIAL_PROP_VALUE) {
                this.skip();
            } else if (err.message === expectedErrMsg) {
                return CORRECT_RESULT_MSG;
            }
        }
    });
};

const checkForNotThrowingErrors = function (testFuncs) {
    return testFuncs.map(f => {
        try {
            f();
        } catch (err) {
            if (err._specialProp === SPECIAL_PROP_VALUE) {
                this.skip();
            } else {
                return INCORRECT_RESULT_MSG;
            }
        }
    });
};

module.exports = {
    checkForThrowingErrors,
    checkForNotThrowingErrors
};