import { assert } from 'chai';
import { testOptional } from '../extensions/index.js';
import Queue from '../src/st-queue.js';

it.optional = testOptional;

Object.freeze(assert);

describe('st-queue', () => {

  it.optional('should create a Queue with the methods', () => {
    const queue = new Queue();
    queue.enqueue(5);
    queue.enqueue(6);
    queue.enqueue(7);
    assert.strictEqual(queue.dequeue(), 5);
    assert.strictEqual(queue.dequeue(), 6);
  });

});
