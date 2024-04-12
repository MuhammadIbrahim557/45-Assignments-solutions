//The easiest way to build the unique names for websites that i have used.(Alternative method)
let current_users:string[] = ["Ibraheem", "Ali", "Asmat","Imran", "Adil"]
let new_users:string[] = ["Ibraheem", "Huzaifa", "Imran", "Umair", "Muzamil"]

for(let newUsers of new_users){
    if(current_users.includes(newUsers)){
        console.log(`The name you entered "${newUsers}" is unavailable.`)
    }else{
        console.log(`The name "${newUsers}" is available.`)
   }
}



// Another way: A little difficult but I always feel easy to use.(Original method)
// let current_users:string[] = ["Mohsin", "Ali","Imran", "Asif","Asmat"]
// let new_users:string[] = ["Ali", "Murztaza", "Bablu", "Mohsin", "Agha"]
// for(let i = 0; i < new_users.length; i ++ ){
//     if(current_users.includes(new_users[i])){
//         console.log(`The name you entered "${new_users[i]}" is unavailable.`)
//     }else{
//         console.log(`The name you entered "${new_users[i]}" is available.`)
//     }
// }







