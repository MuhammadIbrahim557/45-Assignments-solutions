// Making an array list of guest.
let guestList:string[] = ["Imran", "Asmat", "Ali", "Jahangir", "Sabgat"];
// Sending guests an invitation by using "for loop".
for (let i = 0; i < guestList.length; i ++){
    console.log(`Assalam o alaikum, ${guestList[i]}. Could you please join me for a dinner today`)
};
// Here is a print statement guest list below Who cant make it 
let DidntComeGuest:string[] = ["Imran", " Asmat."];
console.log(`The names of guests who cant make it ${DidntComeGuest}`)
// Adding new guests and Removing guests who cant make it and replacing new guests by using "splice".
guestList.splice( 0, 2 , "Sagar","Abdullah", "Adil");
for(let i = 0; i < guestList.length; i++)
// Second set of invitation list for each guest
console.log(`${guestList[i]}, You are still in the list.`);




