// The easiest way to build the unique names for websites that i have used.
// let current_users:string[] = ["Ibraheem", "Ali", "Asmat","Imran", "Adil"]
// let new_users:string[] = ["Ibraheem", "Huzaifa", "Imran", "Umair", "Muzamil"]
// for(let newUser of new_users){
//     if(current_users.includes(newUser)){
//         console.log(`The name you entered "${newUser}" is unavailable.`)
//     }else{
//         console.log(`The name "${newUser}" is available.`)
//  }
// }
var current_users = ["Mohsin", "Ali", "Imran", "Asif", "Asmat"];
var new_users = ["Ali", "Murztaza", "Bablu", "Mohsin", "Agha"];
for (var i = 0; i < new_users.length; i++) {
    if (current_users.includes(new_users[i])) {
        console.log("The name you entered \"".concat(new_users[i], "\" is unavailable."));
    }
    else {
        console.log("The name you entered \"".concat(new_users[i], "\" is available."));
    }
}
