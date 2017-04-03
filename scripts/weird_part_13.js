/**
 * Existence and Booleans
 * 
 */

console.log(Boolean(undefined)); // prints false

console.log(Boolean(null)); // prints false

console.log(Boolean("")); // prints false

console.log(Boolean(0)); // prints false

var a;

if (a) { // a is undefined
    console.log('reached IF/true part');
} else {
    console.log('Reached ELSE/false part');
}

var b = 0;

if (b) { //Boolean(0) => false
    console.log("First");
} else if (b || b === 0) { // true, because the triple equal has higher precedence => if( Number(0) || true) => if(false || true)
    console.log("Second");
} else {
    console.log("Third");
}