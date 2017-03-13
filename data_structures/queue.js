"use strict";

var LinkedList = require('./linkedList').LinkedList;

function Queue(){
    this.linkedList = new LinkedList();
}

Queue.prototype.insert = function(data){
    this.linkedList.insert(data);
}

Queue.prototype.remove = function(){
    return this.linkedList.removeFirst();
}

Queue.prototype.isEmpty = function(){
    return this.linkedList.isEmpty();
}

exports.Queue=Queue;