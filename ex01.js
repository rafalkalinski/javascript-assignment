// use _.partial function to implement functions:

var _ = require('lodash');

var addFiveAndSixAnd = _.partial(/* your code */);
var power = _.partial(/* your code */);
var powerTwo = _.partial(/* your code */);
var powerThree = _.partial(/* your code */);


console.log(addFiveAndSixAnd(4)); //15 (adds 5 + 6 + 4 = 15)

//Evaluates Math.power(2,3)
console.log(power(3)); //8

//Evaluates Math.power(3,2)
console.log(powerTwo(3)); //9

//Evaluates Math.power(3,3)
console.log(powerThree(3)); // 27