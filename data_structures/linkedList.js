'use strict';

function Node(data) {
    this.data = data;
    this.next = null;
}

function LinkedList() {
    this.first = null;
    this.last = null;
}

LinkedList.prototype.isEmpty = function () {
    return this.first === null && this.last === null;
}

LinkedList.prototype.insert = function (data) {
    if (this.first === null) {
        this.first = new Node(data);
        this.last = this.first;
        return;
    }
    this.last.next = new Node(data);
    this.last = this.last.next;
}

LinkedList.prototype.removeFirst = function () {
    let retVal = this.first;
    if (this.first.next) {
        this.first = this.first.next
    } else {
        this.first = null;
        this.last = null;
    }
    return retVal;
}

LinkedList.prototype.removeLast = function () {
    if (this.isEmpty()) {
        console.log('ERROR: empty linked list');
        return null;
    }
    let retVal = this.last;
    let aux = this.first;
    if (!aux.next) {
        this.first = null;
        this.last = null;
    } else {
        while (aux.next.next) {
            aux = aux.next;
        }
        aux.next = null;
        this.last = aux;
    }
    return retVal;
}

LinkedList.prototype.print = function () {
    let aux = this.first;
    let str = "";
    while (aux != null) {
        str += aux.data + "->";
        aux = aux.next;
    }
    console.log("" + str);
}


function swap(node) {
    if (!node || !node.next) {
        return node;
    }
    let tmp = node.next;
    node.next = swap(tmp.next);
    tmp.next = node;
    return tmp;
}

function reverse(node) {

    let a = node;

    let b = a.next;
    let c = b ? b.next : null;
    node.next = null;
    while (b) {
        b.next = a;
        a = b;
        b = c;
        c = c ? c.next : null;
    }
    return b ? b : a;
}

function _getMiddle(node) {
    if (!node) {
        return node;
    }
    let slow = node;
    let fast = node;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

function merge(node1, node2) {
    let dummyHead = new Node();
    let curr = dummyHead;
    while (node1 && node2) {
        if (node1.data < node2.data) {
            curr.next = node1;
            node1 = node1.next;
        } else {
            curr.next = node2;
            node2 = node2.next;
        }
        curr = curr.next;
    }
    if (!node1) {
        curr.next = node2;
    } else {
        curr.next = node1;
    }
    return dummyHead.next;
}

function mergeSort(node) {
    if (!node || !node.next) {
        return node;
    }
    let middle = _getMiddle(node);
    let half = middle.next;
    middle.next = null;
    return merge(mergeSort(node), mergeSort(half));
}

exports.merge = merge;
exports.mergeSort = mergeSort;
exports.reverse = reverse;
exports.LinkedList = LinkedList;
