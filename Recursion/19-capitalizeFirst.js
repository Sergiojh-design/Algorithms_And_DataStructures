/*
Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.
*/

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

function capitalizeFirst (array) {
  // add whatever parameters you deem necessary - good luck!
  let newArray = [];
  let lengthOfArray = array.length;
  let helper = array => {
      if(lengthOfArray === newArray.length){
          return;
      }
      newArray.push(array[0][0].toUpperCase() + array[0].slice(1, array[0].length));
      array = array.slice(1, array.length);
      helper(array);
  }
  helper(array);
  return newArray;
}