"use strict";
// Creating ordinate numbers by using "Array" , "loop" and conditional else_if chain.
let ordinate_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < ordinate_numbers.length; i++) {
    let ordinateEnding;
    if (ordinate_numbers[i] === 1) {
        ordinateEnding = "st";
    }
    else if (ordinate_numbers[i] === 2) {
        ordinateEnding = "nd";
    }
    else if (ordinate_numbers[i] === 3) {
        ordinateEnding = "rd";
    }
    else {
        ordinateEnding = "th";
    }
    console.log(`${ordinate_numbers[i]}${ordinateEnding}`);
}
