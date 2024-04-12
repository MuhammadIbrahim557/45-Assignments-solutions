// Creating an array of pizzas and printing their names.
var Pizzas = ["Four cheese Pizza", "Supreme Pizza", "Pepperoni Pizza"];
for (var i = 0; i < Pizzas.length; i++) {
    console.log(Pizzas[i]);
}
// Adding sentence in the names of the pizzas
for (var _i = 0, Pizzas_1 = Pizzas; _i < Pizzas_1.length; _i++) {
    var pizza = Pizzas_1[_i];
    console.log("I like ".concat(pizza));
}
