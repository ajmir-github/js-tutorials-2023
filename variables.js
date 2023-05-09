// ----- Primitive vars
// - Numbers
let a = 4;
let b = 4;
let c = a + b;

c = c + c;
// console.log(c);

// - Booleans
let on = false;
let aIsBigger = a < b;
// console.log(aIsBigger);
let isEqual = a === b;
// console.log(isEqual);

// - Strings (text)
let name = "Ali";
name = "Esmat";
// console.log(name);

// ----- Non-primitives vars
// - Arrays (list)
let numbers = [3, 5, 6, 7, 6, 7, 8];
numbers[2] = 66;
// console.log(numbers[2]);
console.log(numbers);

// - Objects
let user = {
  name: "Ali",
  age: 23,
  married: false,
};

user.married = true;
// console.log(user.married);
console.log(user);
