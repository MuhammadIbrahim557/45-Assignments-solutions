"use strict";
let personName = "Muhammad ibraheem";
console.log("LowerCase:", personName.toLowerCase());
console.log("UpperCase:", personName.toUpperCase());
console.log("Titlecase:", personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' '));
