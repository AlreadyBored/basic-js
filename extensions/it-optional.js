// code from https://github.com/mikhama/core-js-101
function testOptional(title, fn, isAsyncTest) {
    if (isAsyncTest) {
      it(title, function test(done) {
        try {
          fn.call(this, done);
        } catch (err) {
          if (err === 'Not implemented') {
            console.log('NOT IMPLEMENTED' + title);
            this.test.skip();
          } else {
            console.log('ERR UP' + title);
            throw err;
          }
        }
      });
    } else {
      it(title, function test() {
        try {
          fn.call(this);
        } catch (err) {
          if (err === 'Not implemented') {
            this.test.skip();
          } else {
            throw err;
          }
        }
      });
    }
  }
  
  module.exports = testOptional;