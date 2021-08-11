/*
Sliding Window - maxSubarraySum
  Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the funtion.

Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
*/

/*
Examples:
  maxSubarraySum([100,200,300,400], 2) // 700
  maxSubarraySum([1,4,2,10,23,3,1,0,20], 4) // 39
  maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
  maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2) // 5
  maxSubarraySum([2,3], 3) // null

Constraints:
Time Complexity - O(N)
Space Complexity - O(1)
*/

//My Solution
function maxSubarraySum(array, num) {
  if(array.length - 1 < num) {
      return null
  }

  let sum = 0;
  let tempSum = 0;
  let i = 0;
  let k = 0;
  let j = num - 1;
  while(j < array.length){
      if(i > j){
          tempSum = tempSum - array[k];
          k++;
          j = j+1;
      }
      if(i <= j){
          tempSum += array[i];
          i++;
      }
      if(tempSum > sum){
          sum = tempSum;
      }
  }
return sum;
}