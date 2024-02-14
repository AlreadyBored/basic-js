const { describe } = require('node:test');
const assert = require('node:assert');
const { test } = require('../lib');
const { getDNSStats } = require('../src/dns-stats.js');

describe('DNS stats', () => {
  // Presence requirement
  test('function getDNSStats exists', () => {
    assert.strictEqual(typeof getDNSStats, 'function');
  });

  // Functional requirements
  test('should return domains stats', () => {
    assert.deepStrictEqual(getDNSStats(['epam.com']), { '.com': 1, '.com.epam': 1 });
    assert.deepStrictEqual(getDNSStats(['epam.com', 'info.epam.com']), {
      '.com': 2,
      '.com.epam': 2,
      '.com.epam.info': 1,
    });
    assert.deepStrictEqual(getDNSStats([]), {});
  });
});
