/**
 * Created by aneira on 6/26/16.
 */

"use strict";

var LinkedList=require('../data_structures/linkedList');

var list = new LinkedList.LinkedList();
list.insert(234);

list.insert(1);
list.insert(4);
list.insert(6);
list.insert(666);
list.insert(7);
list.print();
list.first = LinkedList.mergeSort (list.first);
list.print();

//var popped=list1.removeLast();
//console.log("popped.data="+popped.data);
//list1.print();
//popped=list1.removeLast();
//console.log("popped.data="+popped.data);
//list1.print();
//popped=list1.removeLast();
//console.log("popped.data="+popped.data);
//list1.print();
//popped=list1.removeLast();
//console.log("popped.data="+popped.data);
//list1.print();
//popped=list1.removeLast();
//console.log("popped.data="+popped.data);
//list1.print();
//popped=list1.removeLast();
//console.log("popped.data="+popped.data);
//list1.print();
