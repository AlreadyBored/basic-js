const { CORRECT_RESULT_MSG, SPECIAL_PROP_VALUE } = require('./constants');

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
                return
            }
        }
    });
};

module.exports = {
    checkForThrowingErrors,
    checkForNotThrowingErrors
};