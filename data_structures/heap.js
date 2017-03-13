"use strict";

var ARR_LENGTH=1000000;

function Heap(compareFunc){
    this.arr = new Array(ARR_LENGTH);
    this.i = 0;
    this.compareFunc = compareFunc;
}

Heap.prototype.add=function(data){
    this.arr[this.i] = data;
    var n = this.i;
    while (n !== 0 && this.compareFunc(this.arr[n],this.arr[parent(n)])<0){
        swap(this.arr,n,parent(n));
        n = parent(n);        
    }
    this.i++;
}

Heap.prototype.pop=function(data){
    if(this.i <= 0){
        return null;
    }
    var retVal = this.arr[0];
    this.arr[0] = this.arr[this.i -1];
    this.arr[this.i-1]=null;
    this.i--;

    this._adjust(0);
    return retVal;
}

Heap.prototype._isLeaf=function(index){
    return (!this.arr[2*index+1] && !this.arr[2*index+2]);
}
Heap.prototype._adjust=function(index){
    if(this._isLeaf(index)){
        return;
    }
    var m=-1;
    if(this.arr[2*index+1] && this.compareFunc(this.arr[index],this.arr[2*index+1])>0){
        m=2*index+1;
    }
    if(this.arr[2*index+2] && this.compareFunc(this.arr[index],this.arr[2*index+2])>0){
        if(this.compareFunc(this.arr[2*index+2],this.arr[2*index+1])<0){
            m=2*index+2;
        }
    }   
    if(m>=0){
        swap(this.arr,index,m);
        this._adjust(m);
    }
}


function parent(childIndex){
    return Math.floor((childIndex-1)/2);
}

function swap (arr,i,j){
    var aux=arr[i];
    arr[i]=arr[j];
    arr[j]=aux;
}

Heap.prototype.printArr = function(){
    var str="[";
    for(var i=0;i<this.arr.length&&this.arr[i];i++){
        str+="{key:"+this.arr[i].key+",row:"+this.arr[i].row+"},";
    }
    str+="]";
    console.log(""+str);
}

exports.Heap = Heap;
//var heap = new Heap(function(a,b){return a-b;});
//heap.add(123);
//heap.add(1);

//heap.add(3);

//heap.add(12);

//heap.printArr();
//console.log("pop="+heap.pop());
//heap.printArr();

//console.log("pop="+heap.pop());
//console.log("pop="+heap.pop());
//console.log("pop="+heap.pop());
