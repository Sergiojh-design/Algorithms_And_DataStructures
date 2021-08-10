/*
Multiple Pointers
  Implement a functiion called countUniqueValues,
  which accepts a sorted array, and counts the
  unique values in the array. There can be negative
  numbers in the array, but it will always be sorted.
*/

/*
Examples:
countUniqueValues([1,1,1,1,1,2])  // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])  // 7
countUniqueValues([])  // 0
countUniqueValues([-2,-1,-1,0,1])  // 4

Time Complexity - O(n)
Space Complexity - O(n)

Bouns
You must do this with constant or O(1) space and O(n) time.
*/

//MySolution
function countUniqueValues(array) {
  if(array.length === 0) {
      return 0;
  }

  var uniqueValues = {};
  for(var i=0; i<array.length; i++) {
      uniqueValues[array[i]] ? uniqueValues[array[i]] += 1 : uniqueValues[array[i]] = 1
  }

  return Object.keys(uniqueValues).length
}

//My Alterate Solution
function countUniqueValues(array) {
  if(array.length === 0) {
      return 0;
  }

  let counter1 = 0;
  let counter2 = 1;
  while(counter2 !== array.length){
      if(array[counter1] === array[counter2]) {
          counter2++;
      } else if (array[counter1] !== array[counter2] && counter1 + 1 !== counter2) {
          counter1++;
          array[counter1] = array[counter2];
          counter2++;
      } else if (array[counter1] !== array[counter2]) {
          counter1++;
          counter2++;
      }
  }

  return counter1+1;
}

//udemy Solution
function countUniqueValues(arr) {
  if(arr.length === 0) {
      return 0;
  }
  var i=0;
  for(var j= 1; j <arr.length; j++) {
    if(arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j]
    }
  }
  return i+1;
}