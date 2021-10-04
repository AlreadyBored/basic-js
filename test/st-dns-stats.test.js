import { assert } from 'chai';
import { testOptional } from '../extensions/index.js';
import getDNSStats from '../src/st-dns-stats.js';

it.optional = testOptional;

Object.freeze(assert);

describe('st-dns-stats', () => {
  it.optional('should return domains stats', () => {
    assert.deepEqual(getDNSStats(['epam.com']), { '.com': 1, '.com.epam': 1 });
    assert.deepEqual(getDNSStats(['epam.com', 'info.epam.com']), { '.com': 2, '.com.epam': 2, '.com.epam.info': 1 });
    assert.deepEqual(getDNSStats([]), {});
  });
});
