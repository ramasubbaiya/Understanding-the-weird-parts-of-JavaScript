/** The two phases in javascript 
 * 1. Creation phase
 * 2. Excution phase
 * 
 * Javascript is a single Threaded, Synchronous Execution
 * One command is executed at a time
 * 
 * Synchronous - One At A Time - In the order that appears
 */

/* Function Invocation and Execution Stack
 * Innvocation - Running/Calling a function
 * In Javascript, by using parenthesis ()
 * 
 */

/** The below numbers show the order of execution */
function a() { // 2.
    b(); // 3.
    var c; // 6.
}

function b() { // 4.
    var d; // 5.
}

a(); // 1.
var e; // 7.

/** If you see the above execution var c is executed after the function b is invoked */