import { NotImplementedError } from '../extensions/index.js';

// import { ListNode } from '../extensions/index.js';

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

export default class Queue {
  get size() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  enqueue(/* element */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  dequeue() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}
