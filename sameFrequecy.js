/*
Frequency Counter - sameFrequency
  Write a function called sameFreuency. Given two positive integers, find out if the two numbers have the same frequency of digits.

  Your solution MUST have the following complexities.
  Time: O(N)
*/

/*
Examples:
  sameFrequency(182, 281)  // true
  sameFrequency(34, 14) // false
  sameFrequency(3589578, 5879385) // true
  sameFrequency(22, 222) // false
*/

function sameFrequency(num1, num2) {
  num1 = JSON.stringify(num1);
  num2 = JSON.stringify(num2);
  let obj1 = {};
  let obj2 = {};

  if(num1.length !== num2.length) {
      return false;
  }

  for(var i = 0; i < num1.length; i++) {
      obj1[num1[i]] ? obj1[num1[i]] =+ 1 : obj1[num1[i]] = 1;
      obj2[num2[i]] ? obj2[num2[i]] =+ 1 : obj2[num2[i]] = 1;
  }

  for(let keys in obj1) {
      if (obj2[keys] === undefined) {
          return false;
      } else if (obj1[keys] !== obj2[keys]) {
          return false;
      }
  }
  return true;
}