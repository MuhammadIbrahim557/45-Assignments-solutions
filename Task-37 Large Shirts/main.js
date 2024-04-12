function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love typescript"; }
    return console.log("Shirt size is: ".concat(size, " and message printed on it is: ").concat(message));
}
make_shirt();
