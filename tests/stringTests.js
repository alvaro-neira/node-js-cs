/**
 * Created by aneira on 6/27/16.
 */

"use strict";

var StringUtils=require('../node-utils/lib/stringUtils');

var str='hola chao';
console.log(str);
str=StringUtils.invert(str);
console.log(str);