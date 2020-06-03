'use strict';

function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

function BinaryTree() {
    this.root = null;
}

function printlevels(root, arr, level) {
    if (!arr[level]) {
        arr[level] = {str: ''};
    }
    if (root == null) {
        arr[level].str += 'null,';
        return;
    }
    arr[level].str += (root.data + ',');
    printlevels(root.left, arr, level + 1);
    printlevels(root.right, arr, level + 1);
}

exports.Node = Node;
exports.printlevels = printlevels;
exports.BinaryTree = BinaryTree;