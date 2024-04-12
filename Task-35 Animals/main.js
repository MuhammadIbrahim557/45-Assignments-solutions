// Printing each animal using array and for loop
var animals = ["Monkey", "Goat", "Buffalo"];
for (var i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
// Adding statement for each animal
for (var i = 0; i < animals.length; i++) {
    console.log("A ".concat(animals[i], " would make a pet "));
}
console.log("Any of these animals would make a great pet!");
