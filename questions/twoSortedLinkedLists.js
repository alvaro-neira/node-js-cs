/**
 * Created by aneira on 6/27/16.
 * Given two sorted linked lists of integers write an algorithm to merge the two linked lists 
 * such that the resulting linked list is in sorted order. You are expected to define the data 
 * structure for linked list as well. Analyze the time and space complexity of the merge algorithm.
 */

"use strict";

var LinkedList=require('../data_structures/linkedList');

var list1 = new LinkedList.LinkedList();
list1.insert(2);

list1.insert(4);
list1.insert(4);
list1.insert(6);
list1.insert(666);
list1.print();

var list2 = new LinkedList.LinkedList();
list2.insert(3);

list2.insert(5);
list2.insert(7);
list2.insert(7);
list2.insert(6661);
list2.print();

var res=new LinkedList.LinkedList()
res.first=LinkedList.merge(list1.first,list2.first);
res.print();