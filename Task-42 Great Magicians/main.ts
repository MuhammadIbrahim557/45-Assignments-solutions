
let magicians: string[] = ["Lalu", "khan", "Xavier", "jojo"];

function show_magicians(magicians: string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

function make_great(magicians: string[]){
    for(let i = 0; i < magicians.length; i++){
        magicians[i] = "The great " + magicians[i];
    }
}


console.log("Original list of magicians:");
console.log(magicians);

make_great(magicians);

console.log("Modified list of magicians:");

show_magicians(magicians);

