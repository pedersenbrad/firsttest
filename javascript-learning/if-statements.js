// Using if and else, make decisions based on the values of n and result with the following rules:
//
//     When n is even, set the value of result to result's current value plus 10.
//     When n is odd, set the value of result to result's current value minus the value of n.
//     Do not declare new variables.
//     Be sure your solution works for all values of n and result.


// var n = prompt("Enter a number");
// var result = 0;
//
// if (n%2 == 0) {
//   result = result + 10;
// } else {
//   result = result - n;
// }
//
// console.log(result)

// You can use 25 as a starting point, but the following steps should work regardless of the value of n.
//
//     Declare a new variable named "sum" and initialize it to 0. Be sure to use the var keyword.
//     Use a for loop to add every positive integer less than n to sum.
//     Come up with a solution that works for all values of n.

var n = prompt("Enter a number");
var sum = 0;

for (loopcounter = 0; loopcounter < n; loopcounter++) {
  sum = sum + loopcounter;
  console.log(sum);
}
