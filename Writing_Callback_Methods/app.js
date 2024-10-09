// functions as values in js

// function declaration, function name of function, call fn, does something
function holler() {
  console.log("HEY YOU!");
}

// function saved in a variable
// function expression
const whisper = function () {
  // this function has no name. It is an annonymous function
  console.log("pssst I have a secret");
};

function add(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}
function divide(x, y) {
  return x / y;
}
function power(x, y) {
  return x ** y;
}

// functions are variables in js
// can put them in an array

//We can store functions in an array (not that common really, but we can!)
//This works because functions are just regular old values in JavaScript!
// don't add the paranthesis, otherwise will be calling functions
const mathFuncs = [add, subtract, multiply, divide, power];

// **** functions as arguments, CALLBACK FUNCTIONS

// example setTimeout is calling the whipser function
// setTimeout(whisper, 4000);
// addEventListener("click", function())

//This function expects the 3rd argument to be a function:
function doMath(a, b, mathFunc) {
  return mathFunc(a, b);
}

doMath(10, 20, add); //30
doMath(10, 20, multiply); //200

// can also use annonymous fns like this
doMath(3, 4, function (a, b) {
  console.log(a ** b);
});

//This function calls every function in an array of functions
// run through all fns in the array
function doAll(a, b, funcs) {
  for (let func of funcs) {
    console.log(func(a, b));
  }
}

doAll(3, 3, mathFuncs);
//6 (from add)
//0 (from subtract)
//9 (from multiply)
//1 (from divide)
//27 (from power)
