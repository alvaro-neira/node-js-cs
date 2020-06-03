/**
 * Created by aneira on 6/27/16.
 * Given n, output the numbers from 0 to 2^n-1 (inclusive) in n-bit binary form, in such an order that adjacent numbers in the list differ by exactly 1 bit.


 */

'use strict';

const NumberUtils = require('../node-utils/lib/numberUtils');

function binaryToGray(num) {
    return (num >> 1) ^ num;
}

let n = 5;
let i;
for (i = 0; i <= Math.pow(2, n - 1); i++) {
    console.log(NumberUtils.decimal2binary(binaryToGray(i)));
}