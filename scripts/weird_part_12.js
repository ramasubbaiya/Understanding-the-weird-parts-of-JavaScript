/**
 * EQUALITY
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
 * 
 * Examples credit : http://stackoverflow.com/questions/359494/which-equals-operator-vs-should-be-used-in-javascript-comparisons
 */

console.log(1 == "1"); //prints true
console.log(1 === "1"); // prints false

console.log('' == '0'); // prints false
console.log(0 == ''); // prints true
console.log(0 == '0'); // prints true

console.log(false == 'false'); // prints false
console.log(false == '0'); // prints true

console.log(false == undefined); // prints false
console.log(false == null); // prints false
console.log(null == undefined); // prints true


var a = [1, 2, 3];
var b = [1, 2, 3];

var c = { x: 1, y: 2 };
var d = { x: 1, y: 2 };

var e = "text";
var f = "te" + "xt";

console.log(a == b); // prints false
console.log(a === b); // prints false

console.log(c == d); // prints false
console.log(c === d); // prints false

console.log(e == f); // prints true
console.log(e === f); // prints true

console.log(' \t\r\n ' == 0); // prints true

console.log("abc" == new String("abc")); // prints true
console.log("abc" === new String("abc")); // prints false