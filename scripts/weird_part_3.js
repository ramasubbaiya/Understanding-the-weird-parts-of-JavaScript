b(); // prints 'Called b'
console.log(a); // undefined 

/** If the variable a is commented (line : 8)
 * console.log(a);
 * Uncaught ReferenceError: a is not defined
 */

var a = 'Hello Folks!';

function b() {
    console.log('Called b!')
}