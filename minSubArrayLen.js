/*
Sliding Window - minSubArrayLen

Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
*/

/*
Example:
  minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
  minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
  minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
  minSubArrayLen([1,4,16,22,5,7,8,9,10], 39) // 3
  minSubArrayLen([1,4,16,22,5,7,8,9,10], 55) // 5
  minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
  minSubArrayLen([1,4,16,22,5,7,8,9,10], 95) // 0
*/

//My Solution
function minSubArrayLen(array, num) {
  let i = 0;
  let j = 0;
  let sum = 0;
  let count = array.length + 1;
  let tempCount = array.length + 1;
  while(j !== array.length && i !== array.length) {
      if(i === j){
          sum = array[i];
      }
      if(sum >= num){
          tempCount = (j-i)+1;
          i++
          j = i;
      }
      if(tempCount < count){
          count = tempCount;
      }
      if(sum < num){
          j++;
          sum += array[j];
      }
  }

  if(tempCount === array.length + 1 && count === array.length + 1){
    return 0;
  }
  return count;
}