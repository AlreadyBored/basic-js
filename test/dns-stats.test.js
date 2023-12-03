const { assert } = require('chai');
const { testOptional } = require('../extensions/index.js');
const { getDNSStats } = require('../src/dns-stats.js');

it.optional = testOptional;

Object.freeze(assert);

describe('DNS stats', () => {
  it.optional('should return domains stats', () => {
    assert.deepEqual(getDNSStats(['epam.com']), { '.com': 1, '.com.epam': 1 });
    assert.deepEqual(getDNSStats(['epam.com', 'info.epam.com']), { '.com': 2, '.com.epam': 2, '.com.epam.info': 1 });
    assert.deepEqual(getDNSStats([]), {});
  });
});
