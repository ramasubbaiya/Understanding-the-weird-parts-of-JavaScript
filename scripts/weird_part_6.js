/** EXAMPLE ONE */
function b() { // 8.
    // this myVar is function b's execution context
    var myVar; // 9.
    console.log(myVar); // 10.  -- prints undefined
}

function a() { // 4.
    // this myVar is function a's execution context
    var myVar = 2; // 5.
    console.log(myVar); // 6.   -- prints 2
    b(); // 7.
}

// this myVar is Global execution context
var myVar = 1; // 1.
console.log(myVar); // 2.       -- prints 1
a(); // 3.
console.log(myVar); // 11.      -- prints 1


/** EXAMPLE TWO */
function two() { // 6.
    /** if the a is not defined inside this function,
     *  it searches the outer(global) context and
     *  if found it prints the value
     * else gives a reference error : var not defined
     */
    console.log(a); // 7.      -- prints 1
}

function one() { // 3.
    /** This var a only resist inside this function */
    var a = 2; // 4.
    two(); // 5.

}

var a = 1; // 1.
one(); // 2. 

/** EXAMPLE THREE 
 * PS: comment EXAMPLE ONE to run this example without errors
 */

function a() {
    function b() {
        console.log(myVar); // prints 2
    }
    /** If the below line is commented
     * line 44: prints 1
     */
    var myVar = 2;
    b();
}

var myVar = 1;
a();