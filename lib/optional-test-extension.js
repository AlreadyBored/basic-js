const { test } = require('node:test');
const { isNotImplementedError } = require('./errors.js');

function optionalTestExtension(title, cb, isAsyncTest) {
  test(title, (t) => {
    if (isAsyncTest) {
      runAsyncTestCb(cb, t, title);
    } else {
      runSyncTestCb(cb, t, title);
    }
  });
}

const runAsyncTestCb = (cb, t, title) => {
  cb.call(t).catch((err) => {
    handleTestError(t, title, err);
  });
};

const runSyncTestCb = (cb, t, title) => {
  try {
    cb.call(t);
  } catch (err) {
    handleTestError(t, title, err);
  }
};

const handleTestError = (t, title, err) => {
  if (isNotImplementedError(err)) {
    t.todo(`Pending: ${title}`);
  } else {
    throw err;
  }
};

module.exports = {
  test: optionalTestExtension,
};
