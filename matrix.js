"use strict";

var Heap=require("./heap").Heap;

var matrix = [ 
[20, 40, 80], 
[5, 60, 90], 
[45, 50, 55] 
];

printSorted(matrix);

function printSorted(matrix){
    var currentIndexes = new Array(matrix.length);
    var N=matrix[0].length;
    for(var i=0;i<currentIndexes.length;i++){
        currentIndexes[i]=0;
    }
    var heap = new Heap(function(a,b){return a.key - b.key;});
    for(var j=0;j<matrix.length;j++){

        heap.add({key:matrix[j][currentIndexes[j]],row:j});
    }
    var printed = 0;
    var retVal="";
    while(printed < matrix.length*N){
        heap.printArr();

        var popped = heap.pop();
        retVal+=popped.key+",";
        printed++;
        if(currentIndexes[popped.row]<(N-1)){
            heap.add({key:matrix[popped.row][++(currentIndexes[popped.row])],row:popped.row});   
        }     
    }
    console.log("retVal="+retVal);
} 