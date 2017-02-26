import { curry } from 'lodash';

var match = curry((reg, str) => str.match(reg));
var filter = curry((f, arr) => arr.filter(f));

var haveSpace = match(/\s+/g);

haveSpace('ffffff');

haveSpace(' a b ');

console.log(filter(haveSpace, ['abcd', 'Hello world']));
