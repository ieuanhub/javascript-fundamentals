// IF STATEMENTS = if a condition is true, execute some code
//                  if not, do something else

/*
AGE EXAMPLE OF IF STATEMENTS
let age = 20;

if(age >= 18){
    console.log("You are old enough to enter this site");
}
else{
    console.log("You must be 18+ to enter this site")
}
*/

/////////////////////////////////////////////////////////////////////

/*
TIME EXAMPLE OF IF STATEMENTS
let time = 9;

if(time < 12){
    console.log("Good Morning");
}
else{
    console.log("Good Afternoon");
}
*/

/////////////////////////////////////////////////////////////////////

/*
STUDENT EXAMPLE OF IF STATEMENTS
let isStudent = false;

if(isStudent){
    console.log("You are a student");
}
else{
    console.log("You are NOT a student");
}
*/

/////////////////////////////////////////////////////////////////////

/*
LICENSE EXAMPLE OF IF STATEMENTS
let age = 16;
let hasLicense = false;

if(age >= 16){
    console.log("You are old enough to drive");

    if(hasLicense){
        console.log("You have your license, you can drive");
    }
    else{
        console.log("You do not have your license, you cannot drive");
    }
}
else{
    console.log("You must be 16+ to have a license");
}
*/

/////////////////////////////////////////////////////////////////////

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age = 0;

mySubmit.onclick = function(){

    age = myText.value;
    age = Number(age);

if(age >= 100){
    resultElement.textContent = "You are TOO OLD to enter this site.";
}
else if(age == 0){
    resultElement.textContent = "You can't enter. You were just born. Come back in a few years.";
}
else if(age >= 18){
    resultElement.textContent = "You are old enough to enter this site.";
}
else if(age < 0){
    resultElement.textContent = "Your age cannot be below 0.";
}
else{
    resultElement.textContent = "You must be 18+ to enter this site.";
}
}
