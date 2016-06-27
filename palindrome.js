"use strict";

var str=process.argv[2];
console.log("'"+str+"'");

console.log("isPalindrome="+isAlphaNumericPalindrome(str));

function isAlphaNumericPalindrome(str){
    var ini=0;
    var end=str.length - 1;
    while(ini<=end){
        var iniStr=str.substring(ini,ini+1).toLowerCase();
        while( !(/[a-z0-9]/.test( iniStr )) ) {
            ini++;
            iniStr=str.substring(ini,ini+1).toLowerCase();
        }
        var endStr=str.substring(end,end+1).toLowerCase();
        while( !(/[a-z0-9]/.test( endStr )) ) {
            end--;
            endStr=str.substring(end,end+1).toLowerCase();
        }
        if(ini>end){
            return false;
        }
        if( iniStr !== endStr){
            return false;
        }
        ini++;
        end--
    }
    return true;
}

function isPalindrome(str){
    var ini=0;
    var end=str.length - 1;
    while(ini<=end){
        if(str.substring(ini,ini+1) !== str.substring(end,end+1)){
            return false;
        }
        ini++;
        end--
    }
    return true;
}