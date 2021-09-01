/*
Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.
*/

function capitalizeWords (array) {
  // add whatever parameters you deem necessary - good luck!
  let newArray = [];
  let lengthOfArray = array.length;
  let helper = array => {
      if(lengthOfArray === newArray.length){
          return;
      }
      newArray.push(array[0].toUpperCase());
      array = array.slice(1, array.length);
      helper(array);
  }
  helper(array);
  return newArray;
}

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']