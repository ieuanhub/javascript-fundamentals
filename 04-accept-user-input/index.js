// How to accept user input

// 1. EASY WAY = window prompt
// 2. PROFESSIONAL WAY = HTML textbox

/*
let username;

username = window.prompt("What's your username?");

console.log(username);
*/

let username; // variable to store whatever the user types in

document.getElementById("mySubmit").onclick = function(){                   // grab the button by its id, run this function when it's clicked
    username = document.getElementById("myText").value;                     // grab the input box, read its current text (.value), store it in username
    document.getElementById("myH1").textContent = `Hello ${username}`       // grab the h1, replace its text with "Hello " + the username
}