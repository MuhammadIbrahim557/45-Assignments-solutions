// exercise no.41:
// Define an array of magician's names
let magicians: string[] = ["Lalu", "khan", "Xavier", "jojo"];

// Function to show magicians
function show_magicians(magicians: string[]) {
       console.log(magicians)
    };

// exercise no.42:
// Function to modify magicians' names by adding "The great"
function make_great(magicians:string[]){
         for(let i = 0; i < magicians.length; i ++){
            magicians[i] = "The great " + magicians[i]
         }
}
show_magicians(magicians) //Called original array

// exercise no 43
// Call the function to create a new array with "The great" added to magician's names
  let newArrayMagicians = [...magicians] // Using spread operator to create a copy of the array
make_great(newArrayMagicians)
// Call the function to show original magician's names
show_magicians(magicians) // After modification it remains the same.

// Call the function to show modified magician's names
show_magicians(newArrayMagicians) // called modified array and original array remains same.

