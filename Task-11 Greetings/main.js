// Creating an array and sending them messages at the same time, Using "for" loop.
var person_names = ["Ali", "Imran", "Sagar", "Asmat"];
// for (let i = 0; i < person_names.length; i++){
//     console.log(`Assalam o alaikum, ${person_names[i]}`);
// }
for (var i = 0; i < person_names.length; i++) {
    console.log("Assalam o alaikum, ".concat(person_names[i]));
}
