const INCORRECT_RESULT_MSG = 'INCORRECT';

const isThrowingExpectedErrors = function (testsFuncs, expectedErrMsg) {
  const results = testsFuncs.map((f) => {
    try {
      f();
    } catch (err) {
      if (isNotImplementedError(err)) {
        this.skip();
      } else if (err.message !== expectedErrMsg) {
        return INCORRECT_RESULT_MSG;
      }
    }
  });

  return !results.includes(INCORRECT_RESULT_MSG);
};

const isNotThrowingErrors = function (testFuncs) {
  const results = testFuncs.map((f) => {
    try {
      f();
    } catch (err) {
      if (isNotImplementedError(err)) {
        this.skip();
      } else {
        return INCORRECT_RESULT_MSG;
      }
    }
  });

  return !results.includes(INCORRECT_RESULT_MSG);
};

const isNotImplementedError = (err) => err instanceof NotImplementedError;

class NotImplementedError extends Error {
  constructor() {
    super('Not implemented');
  }
}

module.exports = {
  isThrowingExpectedErrors,
  isNotThrowingErrors,
  isNotImplementedError,
  NotImplementedError,
};
