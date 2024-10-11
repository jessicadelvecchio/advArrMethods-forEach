const words = [
  "immunoelectrophoretically",
  "rotavator",
  "tsktsk",
  "psychophysicotherapeutics",
  "squirrelled",
  "crypt",
  "uncopyrightable",
  "cysts",
  "pseudopseudohypoparathyroidism",
  "unimaginatively",
];

//** set of functions using filter to find vowels in words. See the steps when solving a problem. Step by step, small steps. */
// see if a word contains vowel
// calls `isVowel`
// if one letter `isVowel` will return word
const containsVowel = function (word) {
  for (let char of word) {
    if (isVowel(char)) return true;
  }
  return false;
};

// see if a single char is "aeiou"
const isVowel = function (char) {
  return "aeiou".indexOf(char) !== -1;
};

const containVowels = words.filter(containsVowel);

const noVowels = words.filter(function (word) {
  return !containsVowel(word);
});

// ran in console
// filter words in arr that are longer than 20 char
// returns new arr containing words meeting condition
const longWords = words.filter(function (word) {
  return word.length >= 20;
});

// ran in console
// filter words that start with "w" or "c"
const cOrUWords = words.filter(function (w) {
  return w[0] === "u" || w[0] === "c";
});

// * using filter with the DOM. Using boolean values -- checked box
// combine indiv fn into a single fn that will run all at once
// extract information, combining methods

function extractCompletedTodos() {
  // select all checkboxes. Checked or not.
  // need to use the checked property
  const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
  // filter boxes that are checked
  return (
    Array.from(allCheckboxes)
      .filter(function (box) {
        // returns new arr of checked boxes
        return box.checked;
      })
      // create arr that will tell you what you did that day. List each task for you.
      //
      .map(function (checkbox) {
        // find parent element li and the innerText
        return checkbox.parentElement.innerText;
      })
  );
}

// * writing your own filter.

const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');

// write a fn that will accept an arr and a callback fn
function testFilter(arr, callback) {
  // create a new arr. define an empty arr to push to
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      filteredArr.push(arr[i]);
    }
  }
  // return filteredArr
  return filteredArr;
}

const shortWords = testFilter(words, function (word) {
  return word.length <= 10;
});

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

//
//

function myFilter(arr, callback) {
  const filteredArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      filteredArray.push(arr[i]);
    }
  }
  return filteredArray;
}

const shorties = myFilter(words, function (word) {
  return word.length <= 10;
});

const everyOtherWord = myFilter(words, function (word, i) {
  return i % 2 === 0;
});
