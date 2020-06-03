/**
 * Created by aneira on 6/27/16.
 * Microsoft Excel numbers cells as 1...26 and after that AA, AB.... AAA, AAB...ZZZ and so on.
 Given a number, convert it to that format and vice versa.


 */

'use strict';

const ASCII_POS = 65;

function changeBaseExcel(n, base) {
    // n=n+1;
    let rem = n % base;
    let retVal = '' + number2excel(rem);

    while (n > 0) {
        n = Math.floor(n / base);
        if (n === 0) {
            break;
        }
        n = n - 1;
        rem = (n) % base;

        retVal = number2excel(rem) + retVal;

    }
    return retVal
}

function number2excel(n, base) {
    base = base || 26;
    return String.fromCharCode(n + ASCII_POS + 26 - base);
}

let i;
for (i = 0; i < 1000; i++) {
    console.log(changeBaseExcel(i, 26));
}
