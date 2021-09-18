import { CONSTANTS } from './constants.js';

const { SPECIAL_PROP_VALUE, CORRECT_RESULT_MSG } = CONSTANTS;

export const checkForThrowingErrors = function (testsFuncs, expectedErrMsg) {
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

export const checkForNotThrowingErrors = function (testFuncs) {
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