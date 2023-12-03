const { assert } = require('chai');
const { testOptional } = require('../extensions/index.js');
const { getEmailDomain } = require('../src/get-email-domain.js');

it.optional = testOptional;

Object.freeze(assert);

describe('Get email domain', () => {
  it.optional('should return domain name of the given email address', () => {
    assert.strictEqual(getEmailDomain('prettyandsimple@example.com'), 'example.com');
    assert.strictEqual(getEmailDomain('someaddress@yandex.ru'), 'yandex.ru');
    assert.strictEqual(getEmailDomain('very.unusual.@.unusual.com@usual.com'), 'usual.com');
    assert.strictEqual(getEmailDomain('admin@mailserver2.ru'), 'mailserver2.ru');
    assert.strictEqual(getEmailDomain('example-indeed@strange-example.com'), 'strange-example.com');
  });
});
