const { NotImplementedError, isNotThrowingErrors, isThrowingExpectedErrors, isNotImplementedError } = require('./errors.js');
const { test } = require('./optional-test-extension');

module.exports = {
  isNotThrowingErrors,
  isThrowingExpectedErrors,
  isNotImplementedError,
  test,
  NotImplementedError,
};
