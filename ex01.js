// use _.partial function to implement functions:

var _ = require('lodash');

var addFiveAndSixAnd = _.partial((s1, s2, s3) => s1 + s2 +s3, 5, 6);
var power = _.partial((base, exponent) => Math.pow(base, exponent), 2);
var powerTwo = _.partial((base, exponent) => Math.pow(base, exponent), _, 2);
var powerThree = _.partial((base, exponent) => Math.pow(base, exponent), _, 3);


console.log(addFiveAndSixAnd(4)); //15 (adds 5 + 6 + 4 = 15)

//Evaluates Math.power(2,3)
console.log(power(3)); //8

//Evaluates Math.power(3,2)
console.log(powerTwo(3)); //9

//Evaluates Math.power(3,3)
console.log(powerThree(3)); // 27

