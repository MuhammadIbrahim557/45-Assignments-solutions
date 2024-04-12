// Making an array list of guest.
var guestList = ["Imran", "Asmat", "Ali", "Jahangir", "Sabgat"];
// Sending guests an invitation by using "for loop".
for (var i = 0; i < guestList.length; i++) {
    console.log("Assalam o alaikum, ".concat(guestList[i], ". Could you please join me for a dinner today."));
}
;
// Making a print statement guest list below Who could not make the dinner
var whoDidntCome = ["Imran", " Asmat"];
console.log("".concat(whoDidntCome, ", cant make the dinner"));
// Adding new guests and Removing guests who cant make it and replacing new guests by using "splice".
guestList.splice(0, 2, "Sagar", "Abdullah", "Adil");
console.log("New list: ".concat(guestList));
// Informing about the bigger dinner table
console.log("Good news! We found a bigger dinner table.");
//Adding new guest in the beginning for bigger dinner table
guestList.unshift("Muzamil");
// Adding new guest in middle using my favroite splice
guestList.splice(2, 0, "Sarang");
// Adding new guest in the end
guestList.push("Huzaifa");
for (var i = 0; i < guestList.length; i++) {
    console.log("Assalam o alaikum, ".concat(guestList[i], ". Could you please join me for a dinner today."));
}
;
//Adding new line that i can only invite two people
console.log("Unfortunately, the new dinner table won't arrive in time, so I can only invite two people.");
//Removing all guests except two guests and messaging removed guests that i can not invite them.
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
}
// Printing the remaining two guests who are still invited
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("".concat(guest, ", you're still invited to dinner."));
}
// Removing the last two names from the list
guestList.splice(0);
// Printing the empty list to confirm
console.log("Empty list:", guestList);
