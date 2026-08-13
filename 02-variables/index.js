// variable = a container that stores a value.
//              behaves as if it were the value it contains.

// 1. declaration   let x;
// 2. assignment    x = 100;

// 3. both declaration and assignment can be added together making it: `initialization`.

/* example below

let x;
x = 100; 

console.log(x);

*/

// NUMBER EXAMPLES
// let age = 25;
// let price = 10.99;
// let gpa = 2.1;

// STRING EXAMPLES
// let firstName = "Bro";
// let favouriteFood = "Pizza";
// let email = "Bro@Gmail.com";

// BOOLEANS EXAMPLES
// let online = false;
// let forSale = true;
// let isStudent = true;

// console.log(`Bro is online: ${online}`);
// console.log(`Is this car for sale: ${forSale}`);
// console.log(`Enrolled: ${isStudent}`);

// console.log(typeof firstName);
// console.log(`Your name is ${firstName}`);
// console.log(`You like ${favouriteFood}`);
// console.log(`Your email is ${email}`);

// console.log(`You are ${age} years old`);
// console.log(`The price is $${price}`);
// console.log(`Your gpa is ${gpa}`);

// an important thing with strings is they can contain numbers
// a string is a series of character but it cannot be used for math

let fullName = "Bro Code";          // a string
let age = 25;                       // a number
let isStudent = false;              // a boolean

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;