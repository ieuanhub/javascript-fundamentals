// console.log() prints a message to the browser's console (not visible on the actual webpage)
// used mainly for debugging / checking what your code is doing
console.log(`Hello World`);
console.log(`I like pizza!`);

// window.alert() pops up a little popup box in the browser with a message
// the user HAS to click "OK" before they can do anything else on that page
window.alert(`This is an alert!`);
window.alert(`I like pizza!`);

// document.getElementById("myH1") finds an HTML element on the page that has id="myH1"
// .textContent = `Hello` then changes the TEXT inside that element to say "Hello"
// so this line is grabbing a heading (h1) on the page and swapping its text
document.getElementById("myH1").textContent = `Hello`;

// same idea but this time targeting an element with id="myP" which is the paragraph tag
// and setting its text to "I like pizza!"
document.getElementById("myP").textContent = `I like pizza!`;

// TO BREAKDOWN THE FUNCTION ABOVE
// document = your whole webpage, every HTML page you load has one document object in JS, 
// and it represents everything on that page - every tag, every element, ALL OF IT.

// getElementById(...) = a method (built in function) that searches through that whole
// page looking for one specific element - the one whose id attribute matches what you put in the brackets.

// this is a comment, used for myself only, or other developers
// ABOVE - (single-line comment: anything after // on that line is IGNORED by JS)

/*
    this 
    is
    a
    comment.
*/

// ABOVE - (multi-line comment: everything between /* and */ is IGNORED,
// useful for commenting out bigger chunks or writing longer notes)