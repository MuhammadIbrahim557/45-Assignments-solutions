// // Making an array list of guest.
// let guestList = ["Imran", "Asmat", "Ali", "Jahangir", "Sabgat"];
// // Sending that list an invitation by using "for loop".
// for (let i = 0; i < guestList.length; i ++){
//     console.log(`Assalam o alaikum, ${guestList[i]}. Could you please join me for a dinner today`)
// };
var guests = ["Albert Einstein", "Marie Curie", "Nikola Tesla"];
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
