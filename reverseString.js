//Could not do it

"use strict";

var str=process.argv[2];
console.log("'"+str+"'");
console.log("reversed="+reverseSentence(str));

function reverseSentence(str){
    var nOcurrencies = numberOfOcurrencies(str,' ');
    var index=str.lastIndexOf(' ');
    var counter = 0;
    var writeIndex = 0;

    while(counter<nOcurrencies){
        var wordLength=str.length-index-1;
        for(var i=0;i<wordLength;i++){
            var char=str.substring(index+1+i,index+2+i);
            replaceAt(str,index+1+i,str.substring(index+1+i-wordLength,index+2+i-wordLength));
            replaceAt(str,index+1+i,str.substring(index+1+i-wordLength,index+2+i-wordLength));
            writeIndex++;
        }
        str = replaceAt(str,writeIndex++,' ');
        index=str.lastIndexOf(' ');
        counter++;
    }
    return str;
}

function replaceAt(str,index, character) {
    return str.substr(0, index) + character + str.substr(index+character.length);
}

function numberOfOcurrencies(str,substr){
    var retVal = 0;
    var index = str.indexOf(substr);
    while(index!=-1){
        retVal++;
        index = str.indexOf(substr,index+1);
    }
    return retVal;
}