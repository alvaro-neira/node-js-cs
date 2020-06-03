'use strict';

const LinkedList = require('./linkedList').LinkedList;

function Stack() {
    this.linkedList = new LinkedList();
}

Stack.prototype.insert = function (data) {
    this.linkedList.insert(data);
}

Stack.prototype.remove = function () {
    return this.linkedList.removeLast();
}

Stack.prototype.isEmpty = function () {
    return this.linkedList.isEmpty();
}

Stack.prototype.print = function () {
    return this.linkedList.print();
}

exports.Stack = Stack;