// math = built in object that provides a
//        collection of properties and methods  

/* EXAMPLES BELOW WITH DEFINITION, NOT MENT TO WORK */

console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045


let x = 3.21;
let y = 2;
let z;

z = Math.round(x); // rounds to nearest integer
z = Math.floor(x); // rounds down to nearest integer
z = Math.ceil(x); // rounds up to nearest integer
z = Math.trunc(x); // removes decimal part
z = Math.pow(x, y); // x to the power of y
z = Math.sqrt(x); // square root of x
z = Math.log(x); // natural logarithm of x
z = Math.sin(x); // sine of x (x in radians)
z = Math.cos(x); // cosine of x (x in radians)
z = Math.tan(x); // tangent of x (x in radians)
z = Math.abs(x); // absolute value of x
z = Math.sign(x); // returns 1 if x is positive, -1 if x is negative, 0 if x is 0
let max = Math.max(x, y, z); // returns the largest of the given numbers
let min = Math.min(x, y, z); // returns the smallest of the given numbers

console.log(z);