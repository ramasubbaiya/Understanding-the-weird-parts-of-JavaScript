/* variable defined outside the function is the Global variable or object*/
var a = "Hello Folks!";
console.log(a);
console.log(window.a);

function b() {

}
console.log(b);
console.log(window.b);

/* Both the above variable and function will be available in the this-global variable */
console.log(this);