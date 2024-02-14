const { describe } = require('node:test');
const assert = require('node:assert');
const { test } = require('../lib');
const { getEmailDomain } = require('../src/get-email-domain.js');

describe('Get email domain', () => {
  // Presence requirement
  test('function getEmailDomain exists', () => {
    assert.strictEqual(typeof getEmailDomain, 'function');
  });

  // Functional requirements
  test('should return domain name of the given email address', () => {
    assert.strictEqual(getEmailDomain('prettyandsimple@example.com'), 'example.com');
    assert.strictEqual(getEmailDomain('someaddress@yandex.ru'), 'yandex.ru');
    assert.strictEqual(getEmailDomain('very.unusual.@.unusual.com@usual.com'), 'usual.com');
    assert.strictEqual(getEmailDomain('admin@mailserver2.ru'), 'mailserver2.ru');
    assert.strictEqual(getEmailDomain('example-indeed@strange-example.com'), 'strange-example.com');
  });
});
