// Tests for equality & inequality of strings
console.log(`Is Ibraheem == Ibraheem?`, `I predict true.`, `Reslult:`, `Ibraheem` == `Ibraheem`); //
console.log("Is Js !== Js","I predict false." ,"Result:","Js" !== "Js");

// Tests for lowercase function
let mySubject  = `IT`;
console.log(`Is IT toLowerCase == it?`, `I predict true.`, `Result:`, mySubject.toLowerCase() == `it`);
console.log(`Is IT toLowerCase == IT?`, `I predict False.`, `Result:`, mySubject.toLowerCase() == "IT");

// Numerical tests 
console.log("Is 5 === 5 ","I predict true.", "Result:", 5 === 5);
console.log("Is 5 !== 5 ","I predict false.", "Result:", 5 !== 5);
console.log("Is 5 < 6 ","I predict true.", "Result:", 5 < 6);
console.log("Is 10 > 20","I predict false.", "Result:", 10 > 20);
console.log("Is 7 >= 5 ","I predict true.", "Result:", 7 >= 5);
console.log("Is 7 <= 5 ","I predict false.", "Result:", 7 <= 5);

// Tests for "And" operator and "Or" Operator
let a = 5;
let b = 6;
console.log("Is a == 5 && b == 6, I predict true.", "Result:", a == 5 && b == 6);
console.log("Is a == 10 && b == 6, I predict false.", "Result:", a == 10 && b == 6);

console.log("Is a == 5 ||  b == 6, I predict true.", "Result:", a == 5 || b == 6);
console.log("Is a == 10 || b == 7, I predict false.", "Result:", a == 10 || b == 7);

// Test whether an item is in an array
let fruits: string[] = ["apple", "banana", "orange"];
console.log(`Is 'banana' in the array? I predict true.`)
console.log(fruits.includes("banana"))

// Test whether an item is not in an array
console.log("Is 'grape' in the fruits array? I predict True.");
console.log(!fruits.includes("grape"));






