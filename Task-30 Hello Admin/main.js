// let userNames:string[] = ["Sarang", "Huzaifa", "Asmat", "Ali", "Imran", "Admin"];
// for (let i = 0; i < userNames.length; i ++)
//     if(userNames[i] === "Admin" ){
//  console.log("Hello Admin, would you like to see a status report?");
//     }else{
//         console.log(`Assalam o alaikum. ${userNames[i]}, thank you for logging in.`)
//     }
var userNames = ["Sarang", "Huzaifa", "Asmat", "Ali", "Imran", "Admin"];
for (var i = 0; i < userNames.length; i++)
    if (userNames[i] === "Admin") {
        console.log("Hello Admin, would you like to see a status report?");
    }
    else {
        console.log("Assalam o alaikum. ".concat(userNames[i], ", Thank you for logging in."));
    }
