// - length, push, pop, shift & unshift
let nums = [4, 5, 6, 7, 8, 9];
// console.log("Size of nums: ", nums.length, nums);
// nums.push(10);
// nums.pop();
// nums.unshift(1);
// nums.shift();

// - find, includes, indexOf, sort
let names = ["Ali", "Esmat", "Mohammad", "Iqbal"];
// let foundElement = names.find(function (name) {
//   if (name === "Ali") {
//     return true;
//   } else {
//     return false;
//   }
// });

// console.log(names.includes("Esmat"));
// console.log(names.indexOf("Mohammad"));
let shuffledNumbers = [4, 2, 7, 1, 9];
let orderedNumbers = shuffledNumbers.sort(function (a, b) {
  return a - b;
  //   return b - a;
});
// console.log(orderedNumbers);

// - for-of loop
let games = [true, false, true, true];
for (let game of games) {
  console.log(game);
}

// - Anonomouy Functions
let add = function (a, b) {
  return a + b;
};

function sum(list, logFunc) {
  let sum = 0;
  for (let num of list) {
    sum = num + sum;
  }
  logFunc(sum);
}

let list = [1, 2, 3];
let log = function (result) {
  console.log("Sum: ", result);
};
sum(list, log);
