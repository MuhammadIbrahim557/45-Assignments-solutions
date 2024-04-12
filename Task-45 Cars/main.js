"use strict";
function createCar(manufacturer, model, ...options) {
    const car = { manufacturer, model };
    // Add any additional properties provided
    options.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}
let result = createCar("Toyota", "Corolla", ["color", "red"], ["year", 2020]);
console.log(result);
