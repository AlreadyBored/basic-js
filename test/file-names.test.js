const { describe } = require('node:test');
const assert = require('node:assert');
const { test } = require('../lib');
const { renameFiles } = require('../src/file-names.js');

describe('File names', () => {
  // Presence requirement
  test('function renameFiles exists', () => {
    assert.strictEqual(typeof renameFiles, 'function');
  });

  // Functional requirements
  test('should return an array of names that will be given to the files', () => {
    assert.deepStrictEqual(renameFiles(['doc', 'doc', 'image', 'doc(1)', 'doc']), [
      'doc',
      'doc(1)',
      'image',
      'doc(1)(1)',
      'doc(2)',
    ]);
    assert.deepStrictEqual(renameFiles(['a', 'b', 'cd', 'b ', 'a(3)']), ['a', 'b', 'cd', 'b ', 'a(3)']);
    assert.deepStrictEqual(renameFiles([]), []);
  });
});
