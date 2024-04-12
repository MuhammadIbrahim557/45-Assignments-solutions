// Making an array list of guest.
let guestList:string[] = ["Imran", "Asmat", "Ali", "Jahangir", "Sabgat"];
// Sending guests an invitation by using "for loop".
for (let i = 0; i < guestList.length; i ++){
    console.log(`Assalam o alaikum, ${guestList[i]}. Could you please join for me a dinner today.`)
};


// Making a print statement guest list below Who could not make the dinner
let whoDidntCome:string[] = ["Imran", "Asmat"];
console.log(`${whoDidntCome}, cant make the dinner`);
// Adding new guests and Removing guests who cant make it and replacing new guests by using "splice".
guestList.splice( 0, 2 , "Sagar","Abdullah", "Adil");
console.log(guestList);

// Informing about the bigger dinner table
console.log("Good news! We found a bigger dinner table.");
//Adding new guest in the beginning for bigger dinner table
guestList.unshift("Muzamil");
// Adding new guest in middle using my favroite splice
guestList.splice(2, 0 , "Sarang");
// Adding new guest in the end
guestList.push("Huzaifa");
for(let i = 0; i < guestList.length; i++ ){
    console.log(`Assalam o alaikum, ${guestList[i]}. Could you please join for a dinner today.`);
};// New set of invitation list for each guest.

 


