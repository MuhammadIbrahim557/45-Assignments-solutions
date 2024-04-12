
// Define an array of magician's names
let magicians: string[] = ["Lalu", "khan", "Xavier", "jojo"];

// Function to show magicians
function show_magicians(magicians: string[]): void {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}

// Function to modify magicians' names by adding "the Great"
function make_great(magicians: string[]): string[] {
    const modifiedMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        modifiedMagicians.push("the Great " + magicians[i]);
    }
    return modifiedMagicians;
}

// Call the function to create a new array with "the Great" added to magician's names
const greatMagicians = make_great([...magicians]); // Using spread operator to create a copy of the array

// Call the function to show original magician's names
console.log("Original Magicians:");
show_magicians(magicians);

// Call the function to show modified magician's names
console.log("Modified Magicians:");
show_magicians(greatMagicians);










// let magicians: string[] = ["Alice", "David", "Chris"];

// function make_great(magicians: string[]): string[] {
//     let greatMagicians = [];
//     magicians.forEach(magician => {
//         greatMagicians.push(`${magician} the Great`);
//     });
//     return greatMagicians;
// }

// let greatMagicians = make_great(magicians.slice()); // Creates a new modified array
// console.log("Original magicians:");
// show_magicians(magicians); // Shows original names
// console.log("Great magicians:");
// show_magicians(greatMagicians); // Shows modified names


