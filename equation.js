"use strict";

var BinaryTree = require('./data_structures/binaryTree');

var str=process.argv[2];
console.log("'"+str+"'");
console.log("eq="+equation(str));

function equation(str){
    var index=str.indexOf("+");
    var indexMult;
    if(index === -1){
        indexMult=str.indexOf("*");
        if(indexMult === -1){
            return parseInt(str,10);
        }
        return equation(str.substring(0,indexMult)) * equation(str.substring(indexMult+1,str.length));
    }
    return equation(str.substring(0,index)) + equation(str.substring(index+1,str.length));
}