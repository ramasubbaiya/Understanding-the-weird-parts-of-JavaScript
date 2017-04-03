/**
 * Function Defaults
 */
function greet(name) {
    console.log('Hello ' + name)
}

greet('Rama');
greet(); // It coerced name to undefined and concatenated the string

function checkMe(a, b, c) {
    console.log("a ->", a);
    console.log("b ->", b);
    console.log("c ->", c);
}

checkMe("A");
checkMe("A", "B");
checkMe("A", "B", "C");

function test(param) {
    console.log(param);
    param = param || '<param is empty>';
    console.log('I can help you with ' + param);
}

test();
test(0);
test("");
test(null);