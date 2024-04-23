// exercise no 41
let magicians: string[] = ["Lalu", "khan", "Xavier", "jojo"];

function show_magicians() {
  console.log(magicians);
}

// exercise no 42
function make_great(magicians: string[]) {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = "The great " + magicians[i];
  }
}

console.log("Original list of magicians:");
console.log(magicians);

make_great(magicians);

console.log("Modified list of magicians:");

show_magicians();
