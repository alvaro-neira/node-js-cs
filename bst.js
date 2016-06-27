"use strict";

var BTreePrinter = require('./BTreePrinter').BTreePrinter;

function BSTNode(data){
    this.data = data;
    this.left = null;
    this.right = null;
}

function BinarySearchTree(){
    this.root = null;
}

BinarySearchTree.prototype.insert = function(data){
    this.root = _insert(this.root, data);
}

function _insert(node, data){
    if(node == null){
        return new BSTNode(data);
    }
    if(node.data === data){
        return node;
    }
    if(node.data < data){
        node.right = _insert(node.right, data);
    }else{
        node.left = _insert(node.left, data);
    }
    return node;
}

BinarySearchTree.prototype.print = function(){
    if(this.root){
        console.log('root='+this.root.data);

    }else{
        console.log('root=null');
    }
}

function printlevels(root, arr, level){
    if(!arr[level]){
        arr[level]={str:''};
    }
    if(root == null){
        arr[level].str+='null,';
        return;
    }
    arr[level].str+=(root.data+',');
    printlevels(root.left,arr,level+1);
    printlevels(root.right,arr,level+1);
}
function inorder(root,obj){

    if(root == null){
        obj.str+='null,';
        return;
    }


    inorder(root.left,obj);
    obj.str+=(root.data+',');
    console.log(root.data);
    inorder(root.right,obj);
}
var bst = new BinarySearchTree();
bst.print();
bst.insert(234);
bst.insert(2);
bst.insert(10000);

bst.insert(10);
bst.insert(-10);

bst.print();
var arr=[];
printlevels(bst.root,arr,0);
console.log('');
console.log('printlevels');
for(var k=0;k<arr.length;k++){
    console.log(''+arr[k].str);
}
console.log('');
var obj={str:""};
inorder(bst.root,obj);
// console.log('str='+obj.str);