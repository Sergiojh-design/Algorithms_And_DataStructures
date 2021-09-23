/* Binary Search Exercise */

/*
Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exist. Otherwise, return -1.

This algorithm should be more efficient than linearSearch - you can read how to implement it here - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search and here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/
*/

/*
Examples:
binarySearch([1,2,3,4,5], 2) // 1
binarySearch([1,2,3,4,5], 3) // 2
binarySearch([1,2,3,4,5], 5) // 4
binarySearch([1,2,3,4,5], 6) // -1
binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 10) // 2
binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 95) // 16
binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 100) // -1
*/

//My Solution
function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.round((start+end)/2);

  if(val > arr[end]) return -1;

  while(start < end){
      if(arr[mid] === val){
          return mid;
      } else if (arr[mid] < val){
          start = mid;
          mid = Math.round((start+end)/2);
      } else if (arr[mid] > val){
          end = mid;
          mid = Math.round((start+end)/2);
      }
  }
  return -1;
}

//Udemy Solution
// Original Solution
function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while(arr[middle] !== elem && start <= end) {
      if(elem < arr[middle]){
          end = middle - 1;
      } else {
          start = middle + 1;
      }
      middle = Math.floor((start + end) / 2);
  }
  if(arr[middle] === elem){
      return middle;
  }
  return -1;
}

// Refactored Version
function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while(arr[middle] !== elem && start <= end) {
      if(elem < arr[middle]) end = middle - 1;
      else start = middle + 1;
      middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}

binarySearch([2,5,6,9,13,15,28,30], 103)
