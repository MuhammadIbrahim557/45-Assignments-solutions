// Defining an array of usernames and Admin
let userNames:string[] = ["Sarang", "Huzaifa", "Asmat", "Ali", "Imran", "Admin"];
// Loop for usernames
for(let i = 0; i < userNames.length; i ++)
// Check if the current username is "Admin"
if (userNames[i] === "Admin"){
    console.log("Hello Admin, would you like to see a status report?"); //If it's Admin, print a special greeting
}else{
    console.log(`Assalam o alaikum. ${userNames[i]}, Thank you for logging in.`)
} //If it's not print simple message to everyone else