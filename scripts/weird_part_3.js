b(); // prints 'Called b'
console.log(a); // undefined 

/** If the variable a is commented (line : 8)
 * console.log(a);
 * Uncaught ReferenceError: a is not defined
 * REASON: For var a - the memory space was never setup in the execution phase
 */

var a = 'Hello Folks!';

function b() {
    console.log('Called b!')
}

console.log(a); // prints 'Hello Folks!'