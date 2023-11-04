// FUNCTIONS: Early return
// BEFORE YOU START: please read the /exercises-info/e3.md file.

/**
 * ====================================================
 * Create a function that works as follows:
 * The function name is 'doesArrayIncludeItemsBetweenVals'
 * given an array of numbers. You can use it as the arr for testing purposes
 * The function take an arr (array), val1 (number) and val2 (number) as arguments.
 * The function returns a boolean if array includes an item that is greater than val1 and less than val2
 * The function MUST have 2 return statements: make an early return if the item is found and use the default return otherwise
 * The function MUST be written with NAMED function syntax.
 * doesArrayIncludeItemsBetweenVals([2, 4, 2], 3, 5) => true
 * doesArrayIncludeItemsBetweenVals([2, 4, 2], 5, 10) => false
 */

// Your code goes here...

function doesArrayIncludeItemsBetweenVals(arr, val1, val2) {
  if (!Array.isArray(arr) || typeof val1 !== 'number' || typeof val2 !== 'number') {
      throw new Error("Invalid input. Please ensure you provide an array followed by two numbers.");
  }
  return arr.some(item => item > val1 && item < val2);
}

console.log(doesArrayIncludeItemsBetweenVals([1, 2, 3, 4, 5], 2, 4)); // true, because 3 is between 2 and 4
console.log(doesArrayIncludeItemsBetweenVals([10, 20, 30, 40], 15, 35)); // true, because 20 and 30 are between 15 and 35
console.log(doesArrayIncludeItemsBetweenVals([-5, -4, -3, -2], -4, -2)); // true, because -3 is between -4 and -2
console.log(doesArrayIncludeItemsBetweenVals([1, 2, 3, 4, 5], 0, 1)); // false, no values between 0 and 1

// Andrey Codez, 9 months ago • Initial commit


/**
 * ====================================================
 * Please read the /exercises-info/e4.md file. It describes different types of syntax to write functions
 * Create three functions using 3 types of syntax: named, arrow and function expression (with anonymous function)
 * Named function: getValueWithConditionOne;
 * Arrow Function name: getValueWithConditionTwo;
 * Variable name for the function expression: getValueWithConditionThree;
 * All three functions resolve the same task:
    * The function takes two numbers as arguments
    * If the numbers are both equal to 40, return the sum of them
    * Else return the doubled sum of them
 * getValueWithConditionOne(40, 40) => 80;
 * getValueWithConditionOne(20, 30) => 100;
 */

// Your code goes here...

function getValueWithConditionOne(num1, num2) {
  if (num1 === 40 && num2 === 40) {
      return 80;
  }
  return (num1 + num2) * 2;
}
const getValueWithConditionTwo = (num1, num2) => {
  if (num1 === 40 && num2 === 40) {
      return 80;
  }
  return (num1 + num2) * 2;
}
const getValueWithConditionThree = function(num1, num2) {
  if (num1 === 40 && num2 === 40) {
      return 80;
  }
  return (num1 + num2) * 2;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-3"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function


// Do not delete or change the lines beneath
const f = {
  doesArrayIncludeItemsBetweenVals: doesArrayIncludeItemsBetweenVals || undefined,
  getValueWithConditionOne: getValueWithConditionOne || undefined,
  getValueWithConditionTwo: getValueWithConditionTwo || undefined,
  getValueWithConditionThree: getValueWithConditionThree || undefined,
}
export { f };
