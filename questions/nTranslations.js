/**
 * Created by aneira on 6/27/16.
 * REAL test
 *
 * Given:
 * a encoded to 1
 * b encoded to 2
 * ....
 * z encoded to 26
 *
 * You can translate a number to a string:
 *
 * '123' can be translated to 'abc'
 * but also can be translated to 'aw','lc' which gives 3 total translations
 * '12' can be translated to 'ab' and 'l' -> 2 translations
 *
 * Write a function to get the number of valid combinations from a number like '123123123'
 *
 */

function nTranslations(number) {
    if (number.length <= 1) {
        return 1;
    }
    return isValid(number[0]) * nTranslations(number.substring(1, number.length)) +
        nTranslations(number[0]) * isValid(number.substring(1, number.length));
}

function isValid(s) {
    if (s.length === 1) {
        return 1;
    }
    else if (s.length == 2) {
        return parseInt(s, 10) <= 26;
    }
    return 1;
}


console.log(nTranslations('1'));
console.log(nTranslations('12'));
console.log(nTranslations('123'));
console.log(nTranslations('27'));
console.log(nTranslations('123123123'));