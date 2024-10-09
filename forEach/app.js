// forEach, easiest method to understand
// loops through an array.
// runs a callback fn for each value in the array and then returns undefined
// no matter what will always return undefined
// the purpose is the run through the arr and call the fn

const colors = ["teal", "cyan", "peach", "purple"];

// often the arr.forEach(function())
// is called w an annonymous fn
// can be used with a declared fn

// when we run arr.forEach(console.log) we get three values
// value, index, arr

function yell(val, i) {
  const caps = val.toUpperCase();
  console.log(`At index ${i}, ${caps}`);
}

colors.forEach(yell);

//depending on what you need, can use forEach or for of
// for of didn't exist so forEach was used more often

const prices = [30.99, 19.99, 2.5, 99.0];
let total1 = 0;
prices.forEach(function (price) {
  total1 += price;
});
console.log(total1);

let total2 = 0;
for (let price of prices) {
  total2 += price;
}
console.log(total2);

// ** exercise

function myForEach(val, i) {
  const caps = val.toUpperCase();
  console.log(`At index ${i}, we have: ${caps}`);
}

colors.forEach(myForEach);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Our own version of forEach:
// function forEach(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i], i, arr);
//   }
// }

// forEach(colors, function (color, i) {
//   console.log(color.toUpperCase(), "at index of:", i);
// });

// colors.forEach(function (color, i) {
//   console.log(color.toUpperCase(), "at index of:", i);
// });
