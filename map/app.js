// creates a new array
// iterates through an array
// runs a callback fn for each value in the array
// add the result of that callback fn to the new array
// returns the new array
// map always returns a new array of the same length as the original array

const numbers = [21, 37, 64, 99, 142];
const negatives = numbers.map(function (num) {
  // num is indiv val in arr
  return num * -1; // must be sure to return something in your callback fn
}); //[-21, -37, -64, -99, -142]

// map does not mutate the original array
// would need to save the new arr as another variable

//This creates an array of undefined, since we don't return a value from the callback:
const doubles = numbers.map(function (num) {
  console.log(num * 2);
});

const todos = [
  {
    id: 1,
    text: "walk the dog",
    priority: "high",
  },
  {
    id: 2,
    text: "walk the chickens",
    priority: "medium",
  },
  {
    id: 3,
    text: "feed the cats",
    priority: "low",
  },
  {
    id: 4,
    text: "put out the fire in my garage",
    priority: "very high",
  },
];

// we can use map to extract a piece of data from this array of objs.

// this will create a new array with only the text from each todo. We are saving that new array as a variable. using an annonymous fn.
const todoText = todos.map(function (todo) {
  return todo.text;
}); //["walk the dog", "walk the chickens", "feed the cats", "put out the fire in my garage"]

// using map working w the DOM
const links = Array.from(document.querySelectorAll("a")); // selecting and creating array w `Array.from()`. Can pass in any iterable and create an array w this helper function
const urls = links.map(function (a) {
  return a.href; // call attribute
});

// extracting data from an obj and creating a new array

// ***************************
// WRITING OUR VERSION OF MAP:
// ***************************

function myMap(arr, callback) {
  const mappedArray = [];
  for (let i = 0; i < arr.length; i++) {
    const val = callback(arr[i], i, arr);
    mappedArray.push(val);
  }
  return mappedArray;
}

const priorityMap = myMap(todos, function (todo) {
  return todo.priority;
}); //["high", "medium", "low", "very high"]

const repeatedStrings = myMap(["a", "b", "c", "d", "e"], function (str, idx) {
  return str.repeat(idx);
}); //["", "b", "cc", "ddd", "eeee"]
