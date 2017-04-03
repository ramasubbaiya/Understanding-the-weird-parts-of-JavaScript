/** OPERATOR PRECEDENCE
 *      which operator function gets called first
 * 
 *      Function are called in oredr of precedence
 *      (HIGHER precedence wins)
 * 
 *  ASSOCIATIVITY
 *      what order operator functions get called in:
 *      Left-to-Right or Right-To-Left
 *      when functions have the same precedence
 * 
 *  https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Operator_Precedence 
 */
var a = 2,
    b = 3,
    c = 4;

a = b = c;
/**
 * a = b = c
 * 
 * b = c
 * b = 4
 * 
 * a = b
 * a = 4
 */

console.log(a); // prints 4
console.log(b); // prints 4
console.log(c); // prints 4


var result = 3 + 4 * 5;
console.log(result);

var anotherResult = (3 + 4) * 5;
console.log(anotherResult);