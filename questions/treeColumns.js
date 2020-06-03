/**
 * This is done by myself and works!
 * Created by aneira on 6/27/16.
 *
 * Given the root of a binary tree containing integers, print the columns of the tree in order with the nodes in each column printed top-to-bottom.


 Input:
 6
 / \
 3   4
 / \   \
 5   1   0
 / \     /
 9   2   8
 \
 7

 Output:
 9 5 3 2 6 1 7 4 8 0

 Input:
 1
 /   \
 2     3
 / \   / \
 4   5 6   7

 When two nodes share the same position (e.g. 5 and 6), they may be printed in either order:

 Output:
 4 2 1 5 6 3 7
 or:
 4 2 1 6 5 3 7

 */

'use strict';

const Heap = require('../data_structures/heap').Heap;
const heap = new Heap(function (a, b) {
    if (a.i === b.i) {
        return a.j - b.j;
    }
    return a.i - b.i;
});

function visit(node, i, j) {
    // console.log(node.data,i,j);
    heap.add({data: node.data, i: i, j: j});
}

function insertCoordinatesInorder(node, i, j) {

    if (node == null) {
        return;
    }


    insertCoordinatesInorder(node.left, i - 1, j + 1);
    visit(node, i, j);
    insertCoordinatesInorder(node.right, i + 1, j + 1);
}

let binaryTree = require('../data_structures/binaryTree');
let tree = new binaryTree.BinaryTree();
// tree.root=new binaryTree.Node(6);
// tree.root.left=new binaryTree.Node(3);
// tree.root.left.left=new binaryTree.Node(5);
// tree.root.left.left.left=new binaryTree.Node(9);
// tree.root.left.left.right=new binaryTree.Node(2);
// tree.root.left.left.right.right=new binaryTree.Node(7);
// tree.root.left.right=new binaryTree.Node(1);
// tree.root.right=new binaryTree.Node(4);
// tree.root.right.right=new binaryTree.Node(0);
// tree.root.right.right.left=new binaryTree.Node(8);
tree.root = new binaryTree.Node(1);
tree.root.left = new binaryTree.Node(2);
tree.root.left.left = new binaryTree.Node(4);
tree.root.left.right = new binaryTree.Node(5);
tree.root.right = new binaryTree.Node(3);
tree.root.right.left = new binaryTree.Node(6);
tree.root.right.right = new binaryTree.Node(7);

let arr = [];
binaryTree.printlevels(tree.root, arr, 0);
console.log('');
console.log('printlevels');
for (let k = 0; k < arr.length; k++) {
    console.log('' + arr[k].str);
}
console.log('');
insertCoordinatesInorder(tree.root, 0, 0);
let elem = heap.pop();
while (elem) {
    console.log(elem);
    elem = heap.pop();
}