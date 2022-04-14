// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and
 return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration

function addOne(n) {
  return n + 1;
}

// - Write a Function Expression

let addOne = function (n) {
  return n + 1;
}

// - Write an Arrow Function without curly brackets(if possible)

let addOne = (n) => n + 1;

// - Write an Arrow Function with curly brackets

let addOne = (n) => {
  return n + 1;
};

// - Execute the function

addOne();

// - Execute the function and store the return value in a variable.

let num = addOne();

// - What is the typeof returnValue

// "number"

/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration

function substractOne(n) {
  return n - 1;
}

// - Write a Function Expression

let substractOne = function (n) {
  return n - 1;
}

// - Write an Arrow Function without curly brackets(if possible)

let substractOne = (n) => n - 1;

// - Write an Arrow Function with curly brackets

let substractOne = (n) => {
  return n - 1;
}

// - Execute the function

substractOne();

// - Execute the function and store the return value in a variable.

let sub = substractOne();

// - What is the typeof returnValue

//"number"

/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration

function sum(num1, num2) {
  return num1 + num2;
}

// - Write a Function Expression

let sum = function (num1, num2) {
  return num1 + num2;
}

// - Write an Arrow Function without curly brackets(if possible)

let sum = (num1, num2) => num1 + num2;

// - Write an Arrow Function with curly brackets

let sum = (num1, num2) => {
  return num1 + num2;
}

// - Execute the function

sum();

// - Execute the function and store the return value in a variable

let sumTwoNumbers = sum();

// - What is the typeof returnValue

//"number"

/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration

function square(num) {
  return num * num;
}


// - Write a Function Expression

let square = function (num) {
  return num * num;
}

// - Write an Arrow Function without curly brackets(if possible)

let square = (num) => num * num;


// - Write an Arrow Function with curly brackets

let square = (num) => {
  return num * num;
};


// - Execute the function

square();

// - Execute the function and store the return value in a variable

let squareNum = square();

// - What is the typeof returnValue

//"number"

/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration

function isGreater(x, y) {
  if (x > y) {
    return true;
  } else {
    return false;
  }
}

// - Write a Function Expression

let isGreater = function (x, y) {
  if (x > y) {
    return true;
  } else {
    return false;
  }
}

// - Write an Arrow Function without curly brackets(if possible)

let isGreater = (x, y) => x > y ? true : false;

// - Write an Arrow Function with curly brackets

let isGreater = (x, y) => {
  if (x > y) {
    return true;
  } else {
    return false;
  }
}

// - Execute the function

isGreater();

// - Execute the function and store the return value in a variable

let greater = isGreater();
// - What is the typeof returnValue

//"boolean"

/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration

function oddOrEven(num) {
  if (num % 2 === 0) {
    return `Number is even`;
  } else {
    return `Number is odd`;
  }
}

// - Write an anonymous Function Expression

let oddOrEven = function (num) {
  if (num % 2 === 0) {
    return `Number is even`;
  } else {
    return `Number is odd`;
  }
}


// - Write an named Function Expression

let oddOrEven = function isOddOrEven(num) {
  if (num % 2 === 0) {
    return `Number is even`;
  } else {
    return `Number is odd`;
  }
}

// - Write an Arrow Function without curly brackets (hint: use ternary operator)

let oddOrEven = (num) => num % 2 === 0 ? `Number is even` : `Number is odd`;

// - Write an Arrow Function with curly brackets

let oddOrEven = (num) => {
  if (num % 2 === 0) {
    return `Number is even`;
  } else {
    return `Number is odd`;
  }
}

// - Execute the function

oddOrEven();

// - Execute the function and store the return value in a variable

let evenOdd = oddOrEven();

// - What is the typeof returnValue

//"number"