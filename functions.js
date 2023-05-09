// - Functions
// function add(a, b) {
//   let c = a + b + 1;
//   console.log(c);
//   //   return c;
// }

// add(3, 5);

// function findSquare(a) {
//   return a * a;
// }

// let result = findSquare(9);
// console.log(result);

// Function with array

function findSum(array) {
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    sum = sum + array[index];
  }
  return sum;
}
function logSum(array) {
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    sum = sum + array[index];
  }
  console.log(sum);
}

// console.log(findSum([1, 2, 3]));
// console.log(findSum([4, 5, 6]));
logSum([1, 2, 3]);
logSum([4, 5, 6]);
