/**
 * Created by aneira on 6/27/16.
 *
 * A k-palindrome is a string which transforms into a palindrome on removing at most k characters.

 Given a string S, and an interger K, print "YES" if S is a k-palindrome; otherwise print "NO".
 Constraints:
 S has at most 20,000 characters.
 0<=k<=30

 Sample Test Case#1:
 Input - abxa 1
 Output - YES
 Sample Test Case#2:
 Input - abdxa 1
 Output - No


 */

'use strict';

const StringUtils = require('../node-utils/lib/stringUtils');

function modifiedLevenshtein(word1, word2) {
    let array_t = [];
    let array_u = [];
    let i;
    let j;
    if (!word1.length) {
        return word2.length;
    }
    if (!word2.length) {
        return word1.length;
    }
    for (j = 0; j <= word2.length; j++) {
        array_t[j] = j;
    }
    for (i = 1; i <= word1.length; i++) {
        array_u = [i];
        for (j = 1; j <= word2.length; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                array_u[j] = array_t[j - 1];
            } else {
                array_u[j] = Math.min(
                    // array_t[j - 1], //substitution out
                    array_t[j],
                    array_u[j - 1]
                ) + 1;
            }
        }
        array_t = array_u;
    }
    return array_u[word2.length];
}

// tests
[['', '', 0],
    ['yo', '', 2],
    ['', 'yo', 2],
    ['yo', 'yo', 0],
    ['tier', 'tor', 2],
    ['saturday', 'sunday', 3],
    ['mist', 'dist', 1],
    ['tier', 'tor', 2],
    ['kitten', 'sitting', 3],
    ['stop', 'tops', 2],
    ['hola', 'holo', 8],
    ['mississippi', 'swiss miss', 8]
].forEach(function (v) {
    let a = v[0], b = v[1], t = v[2], d = modifiedLevenshtein(a, b);
    console.log('levenstein("' + a + '","' + b + '") is ' + d);
});

function levenshtein(word1, word2) {
    let array_t = [];
    let array_u = [];
    let i;
    let j;
    if (!word1.length) {
        return word2.length;
    }
    if (!word2.length) {
        return word1.length;
    }
    for (j = 0; j <= word2.length; j++) {
        array_t[j] = j;
    }
    for (i = 1; i <= word1.length; i++) {
        array_u = [i];
        for (j = 1; j <= word2.length; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                array_u[j] = array_t[j - 1];
            } else {
                array_u[j] = Math.min(
                    array_t[j - 1],
                    array_t[j],
                    array_u[j - 1]
                ) + 1;
            }
        }
        array_t = array_u;
    }
    return array_u[word2.length];
}

function isKPalindrome(word, k) {
    return modifiedLevenshtein(word, StringUtils.invert(word)) <= 2 * k;
}

console.log(isKPalindrome('abxa', 1));
console.log(isKPalindrome('abdxa', 1));
console.log(isKPalindrome('abdxa', 2));
