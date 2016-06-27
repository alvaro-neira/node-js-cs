'use strict';

function decimal2binary(n){
    var rem=n % 2;
    var retVal=''+rem;
    while (n>0){
        n=Math.floor(n/2);
        rem=n%2;
        retVal=rem+retVal;
    }
    return retVal;
}

function binary2decimal(str){
    var len=str.length;
    var i;
    var retVal=0;
    for(i=len-1;i>=0;i--){
        var digit=parseInt(str.substring(i,i+1),0);
        retVal+=Math.pow(2,len-i-1)*digit;
    }
    return retVal;
}
var n=decimal2binary(1099999);
console.log(n);
console.log(binary2decimal(n));