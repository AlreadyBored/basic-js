const { isNotThrowingErrors, isThrowingExpectedErrors, isNotImplementedError } = require('./errors.js');
const { test } = require('./optional-test-extension');
const { checkImplementedDecorator, decorateObject, decorateClass } = require('./check-implemented.js');

module.exports = {
  isNotThrowingErrors,
  isThrowingExpectedErrors,
  isNotImplementedError,
  test,
  checkImplementedDecorator,
  decorateObject,
  decorateClass,
};
