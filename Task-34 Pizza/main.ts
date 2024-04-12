// Creating an array of pizzas and printing their names.
let Pizzas:string[] = [ "Four cheese Pizza", "Supreme Pizza", "Pepperoni Pizza"]
for(let i = 0; i < Pizzas.length; i ++){
    console.log(Pizzas[i])}

// Adding sentence in the names of the pizzas
for(let pizza of Pizzas){
    console.log(`I like ${pizza}`)
}
console.log("I like pizza very much.")