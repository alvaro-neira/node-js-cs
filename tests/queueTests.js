/**
 * Created by aneira on 6/26/16.
 */

'use strict';

const Queue = require('../data_structures/queue').Queue;

let queue = new Queue();
console.log("isEmpty=" + queue.isEmpty());
queue.insert(234);
console.log("isEmpty=" + queue.isEmpty());
queue.insert(4);
console.log("isEmpty=" + queue.isEmpty());
queue.insert('b');
console.log("isEmpty=" + queue.isEmpty());
queue.insert('wa');
console.log("isEmpty=" + queue.isEmpty());
queue.linkedList.print();
let popped = queue.remove();
console.log("popped=" + popped.data);
console.log("isEmpty=" + queue.isEmpty());
queue.linkedList.print();
popped = queue.remove();
console.log("popped=" + popped.data);
console.log("isEmpty=" + queue.isEmpty());
queue.linkedList.print();
popped = queue.remove();
console.log("popped=" + popped.data);
console.log("isEmpty=" + queue.isEmpty());
queue.linkedList.print();
popped = queue.remove();
console.log("popped=" + popped.data);
queue.linkedList.print();
console.log("isEmpty=" + queue.isEmpty());