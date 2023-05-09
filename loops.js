// - While-loop

// let number = 1000;
// let count = 0;

// while (count <= number) {
//   console.log(count);
//   count = count + 1;
// }

// console.log("Done!");

// - Loop through an array using while-loop
// let nums = [2, 3, 546, 234, 456, 456, 456, 456, 99];
// //
// let index = 0;
// let size = nums.length;
// while (index < size) {
//   console.log(nums[index]);

//   index = index + 1;
// }

// - example
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // here
// let index = 0;
// while (index < nums.length) {
//   nums[index] = nums[index] * nums[index];
//   //   index = index + 1;
//   index++;
//   //   index--;
// }

// console.log(nums);

// - For loop
// for (let x = 10; x <= 20; x++) {
//   console.log(x);
// }

// - For loop with array
let nums = ["a", "b", "c", "d", "e", "f", "g"];
let from = parseInt(nums.length / 2);
// loop through all
for (let index = from; index < nums.length; index++) {
  console.log(nums[index]);
}
