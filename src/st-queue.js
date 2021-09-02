import { NotImplementedError } from '../extensions/index.js';

// import { ListNode } from '../extensions/list-node.js';

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
export default class Queue {

  getUnderlyingList() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  enqueue(/* value */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  dequeue() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

}
