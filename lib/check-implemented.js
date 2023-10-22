const { NotImplementedError } = require('./errors');

const EMPTY_FUNC_BODY_REGEX = /\) \{\s*\}$/;

function checkImplementedDecorator(originalFunc) {
  return function (...args) {
    const functionCode = originalFunc.toString();

    if (EMPTY_FUNC_BODY_REGEX.test(functionCode)) {
      throw new NotImplementedError(`Function ${originalFunc.name} is not implemented`);
    }

    return originalFunc(...args);
  };
}

function decorateObject(obj) {
  for (const key of Object.getOwnPropertyNames(obj)) {
    if (isFunction(obj[key])) {
      obj[key] = checkImplementedDecorator(obj[key]);
    } else {
      obj[key] = value;
    }
  }

  return obj;
}

function decorateClass(classObj) {
  const prototype = classObj.prototype;

  for (const key of Object.getOwnPropertyNames(prototype)) {
    if (isFunction(prototype[key]) && key !== 'constructor') {
      prototype[key] = checkImplementedDecorator(prototype[key]);
    }
  }

  return classObj;
}

const isFunction = (obj) => typeof obj === 'function';

module.exports = {
  checkImplementedDecorator,
  decorateObject,
  decorateClass,
};
