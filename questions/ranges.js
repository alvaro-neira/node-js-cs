/**
 * Created by aneira on 6/27/16.
 * Given two arrays/Lists (choose whatever you want to) with sorted and non intersecting intervals. Merge them to get a new sorted non intersecting array/list.

 Eg:
 Given:
 Arr1 = [3-11, 17-25, 58-73];
 Arr2 = [6-18, 40-47];

 Wanted:
 Arr3 = [3-25, 40-47, 58-73];


 */

'use strict';

var StringUtils=require('../node-utils/lib/stringUtils');
var Stack=require('../data_structures/stack').Stack;

function mergeRanges(arr1,arr2){
    var i;
    var len=arr1.length;
    var arrInfo=[];
    var stack=new Stack();
    var retVal=[]
    for (i=0;i<len;i++){
        arrInfo.push({value:parseInt(arr1[i].split('-')[0],10),type:0});
        arrInfo.push({value:parseInt(arr1[i].split('-')[1],10),type:1});
    }
    len=arr2.length;
    for (i=0;i<len;i++){
        arrInfo.push({value:parseInt(arr2[i].split('-')[0],10),type:0});
        arrInfo.push({value:parseInt(arr2[i].split('-')[1],10),type:1});
    }
    arrInfo.sort(function(a,b){
        return a.value-b.value;
    });
    len=arrInfo.length;
    for (i=0;i<len;i++){
        if(arrInfo[i].type===0){
            stack.insert(arrInfo[i].value);
        }else{
            var tmp=stack.remove();
            if(stack.isEmpty()){
                retVal.push(tmp.data+'-'+arrInfo[i].value);
            }
        }
    }
    return retVal;
};

var arr1=['3-11', '17-25', '58-73'];
var arr2=['6-18', '40-47'];
var res=mergeRanges(arr1,arr2);

console.log(StringUtils.singleLineArray(res));

