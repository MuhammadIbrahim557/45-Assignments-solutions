// Making shirt with default large size and message
function make_shirt(size:string = "large", message:string = "I love typescript"){
    return console.log(`Shirt size is: ${size} and message printed on it is: ${message}`)
}
make_shirt();
// Making shirt with medium size
make_shirt("medium");
// Making shirt with any size and different message
make_shirt("small", "Are you a Js lover")
