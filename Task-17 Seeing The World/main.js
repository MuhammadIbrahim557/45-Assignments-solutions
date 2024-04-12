// let placesToVist:string[] = ["Saudi arab", "Indonesia", "India", "Oman","America"];
// // Showing original order
// console.log("Original order:", placesToVist);
// //Alphabatical order
// console.log("Alphabatical order:", [...placesToVist.sort()]);
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// // Showing original order
// console.log("Original order:", placesToVist);
// // //Printing array in reverse alphabetical order
// console.log("Reverse alphabetical order:", [...placesToVist].sort().reverse());
// //Showing original order
// console.log("Original order:", placesToVist);
// //Reversing the order of the list
// placesToVist.reverse();
// //Printing array and showing that order has been changed
// console.log("Reversed order:", placesToVist);
// // Reversing the order agaim
// placesToVist.reverse();
// //Showing the original order
// console.log("Original order:", placesToVist);
var placesToVist = ["Saudi arab", "China", "India", "Oman", "America"];
// Showing original order
console.log("Original order:", placesToVist);
// Printing Alphabatical order
console.log("Alphabatical order:", __spreadArray([], placesToVist.reverse(), true).sort());
//Showing the original array order
console.log("Original order:", placesToVist);
//Reversing the array order list
console.log("Reversed order", placesToVist.reverse());
// Printing again original array order
console.log("Original order:", placesToVist);
//Reversing the array order list
console.log("Reversed order:", placesToVist.reverse());
// Final original array order list
console.log("Final Original order:", placesToVist);
