/**
 * Created by aneira on 6/27/16.
 * REAL test
 * a encoded to 1
 * b encoded to 2
 * ....
 * z encoded to 26
 *
 * '123' can be translated to 'abc','aw','lc' -> 3
 * '12' -> 'ab','l' -> 2
 *
 * Write a function to get the number of valid combinations from a number like '123123123'
 */

function nCombinations(number){
    if(number.length <= 1){
        return 1;
    }
    return isValid(number[0])*nCombinations(number.substring(1,number.length))+
        nCombinations(number[0])*isValid(number.substring(1,number.length));
}

function isValid(s){
    if(s.length===1){
        return 1;
    }
    else if(s.length==2){
        return parseInt(s,10)<=26;
    }
    return 1;
}


console.log(nCombinations('1'));
console.log(nCombinations('12'));
console.log(nCombinations('123'));
console.log(nCombinations('27'));