import { assert } from 'chai';
import { testOptional } from '../extensions/index.js';
import Stack from '../src/st-stack.js';

it.optional = testOptional;

Object.freeze(assert);

describe('st-stack', () => {
  it.optional('should create a Stack with the methods', () => {
    const stack = new Stack();
    stack.push(5);
    stack.push(6);
    stack.push(7);
    assert.strictEqual(stack.peek(), 7);
    assert.strictEqual(stack.pop(), 7);
    assert.strictEqual(stack.peek(), 6);
  });
});
