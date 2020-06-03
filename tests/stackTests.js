/**
 * Created by aneira on 6/27/16.
 */

const Stack = require('../data_structures/stack').Stack;

let stack = new Stack();
stack.insert(123);
stack.insert(-123);
stack.insert(1);
stack.insert('hola');
stack.print();
let wa = stack.remove();
console.log(wa);
stack.print();
stack.insert('chao');
stack.print();
wa = stack.remove();
console.log(wa);
stack.print();
wa = stack.remove();
console.log(wa);
stack.print();
wa = stack.remove();
console.log(wa);
stack.print();
wa = stack.remove();
console.log(wa);
stack.print();
wa = stack.remove();
console.log(wa);
stack.print();
wa = stack.remove();
console.log(wa);
stack.print();