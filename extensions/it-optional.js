const { SPECIAL_PROP_VALUE } = require('./constants');

function testOptional(title, fn, isAsyncTest) {
  if (isAsyncTest) {
    it(title, function test(done) {
      try {
        fn.call(this, done);
      } catch (err) {
        if (err._specialProp === SPECIAL_PROP_VALUE) {
          this.test.skip();
        } else {
          throw err;
        }
      }
    });
  } else {
    it(title, function test() {
      try {
        fn.call(this);
      } catch (err) {
        if (err._specialProp === SPECIAL_PROP_VALUE) {
          this.test.skip();
        } else {
          throw err;
        }
      }
    });
  }
}

module.exports = testOptional;