/*
Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.
*/

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

//My Solution
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

//Udemy Solution
function capitalizeWords (array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length-1)[0].toUpperCase());
  return res;

}