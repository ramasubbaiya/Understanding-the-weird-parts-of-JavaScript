/**
 * COERCION
 *      Converting a value from one type to another
 * 
 *      This happens quite often in Javascript because it's dynamically typed.
 * 
 */
var a = 1 + 2;
console.log(a); // prints 3

a = 1 + '2';
console.log(a); // prints 12
// It coerced the number 1 to string and result 12 as a string
console.log(typeof a); // prints string

a = 1 + Number('2'); // It is recommend not to use number function
console.log(a); // prints 3

/** 
 * Comparision Operators
 *     
 * FYI: Number(false)   : 0
 *      Number(true)    : 1   
 */

// 1 is less than 2, 2 is less than 3
console.log(1 < 2 < 3); // prints true
// 1 < 2 < 3  // lest associativity - less than operator
// true < 3   // coercion - Number(true) < 3
// 1 < 3
// true

console.log(3 < 2 < 1); // prints true
// 3 < 2 < 1  // lest associativity - less than operator
// false < 1  // coercion - Number(false) < 1
// 0 < 1
// true