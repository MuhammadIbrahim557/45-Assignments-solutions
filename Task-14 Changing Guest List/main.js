// Making an array list of guest.
var guestList = ["Imran", "Asmat", "Ali", "Jahangir", "Sabgat"];
// Sending guests an invitation by using "for loop".
for (var i = 0; i < guestList.length; i++) {
    console.log("Assalam o alaikum, ".concat(guestList[i], ". Could you please join me for a dinner today"));
}
;
// Here is a print statement guest list below Who cant make it 
var DidntComeGuest = ["Imran", " Asmat"];
console.log("The names of guests who cant make it ".concat(DidntComeGuest));
// Adding new guests and Removing guests who cant make it and replacing new guests by using "splice".
guestList.splice(0, 2, "Sagar", "Abdullah", "Adil");
for (var i = 0; i < guestList.length; i++)
    console.log("".concat(guestList[i], ", You are still in the list."));
