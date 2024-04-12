
function createCar(manufacturer: string, model: string, ...options: [string, any][]): object {
    const car: any = { manufacturer, model };

    // Add any additional properties provided
    options.forEach(([key, value]) => {
        car[key] = value;
    });

    return car;
}

let result = createCar("Toyota", "Corolla", ["color", "red"], ["year", 2020])
console.log(result)
