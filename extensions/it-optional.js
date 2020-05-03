// code is based on solution from https://github.com/mikhama/core-js-101
function testOptional(title, fn, isAsyncTest) {
    if (isAsyncTest) {
      it(title, function test(done) {
        try {
          fn.call(this, done);
        } catch (err) {
          if (err._validationProp === 'NA') {
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
          if (err._validationProp === 'NA') {
            this.test.skip();
          } else {
            throw err;
          }
        }
      });
    }
  }
  
  module.exports = testOptional;