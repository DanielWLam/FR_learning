import _ from 'lodash';
var sin = _.memorize(x => Math.sin(x));
var start = + new Date();
var a = sin(1);
console.log(a);
conosle.log(+new Date() - start);
var b = sin(1);
console.log(+new Date() - start);
console.log(b);