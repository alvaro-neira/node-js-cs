"use strict";

function Node(data){
    this.data = data;
    this.left = null;
    this.right = null;
}

function BinaryTree(){
    this.root = null;
}

function inorder(root,obj){
    
    if(root == null){
        obj.str+='null,';
        return;
    }
    
    
    inorder(root.left,obj);
    obj.str+=(root.data+',');
    inorder(root.right,obj);    
}

//var tree = new BinaryTree();
//tree.root=new Node("+");
//tree.root.left=new Node(1);
//tree.root.right=new Node(100);
//var obj={str:""};
//inorder(tree.root,obj);
//console.log('str='+obj.str);

exports.Graph = Graph;