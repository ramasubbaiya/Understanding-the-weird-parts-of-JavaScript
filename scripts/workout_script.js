a = 1;

console.log(a);

function a() {
    var a;
    console.log(a);
    return a;
}

// Error at this point as variable and name of the function can't be same
a();