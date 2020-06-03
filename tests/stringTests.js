/**
 * Created by aneira on 6/27/16.
 */

'use strict';

const StringUtils = require('../node-utils/lib/stringUtils');

let str = 'hola chao';
console.log(str);
str = StringUtils.invert(str);
console.log(str);