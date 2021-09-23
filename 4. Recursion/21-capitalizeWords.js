/*
Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.
*/

//My Solution
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

//Udemy Solution
function capitalizeFirst (array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeFirst(array.slice(0, -1));
  const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
  res.push(string);
  return res;
}

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']