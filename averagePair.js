/*
Mulltiple Pointers - averagePair
  Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

  Bouns Constraints:
  Time: O(N)
  Space: O(1)
*/

/*
Examples:
  averagePair([1,2,3], 2, 5) // true
  averagePair([1,3,3,5,6,7,10,12,19], 8) // true
  averagePair([-1,0,3,4,5,6], 4.1) // false
  averagePair([], 4) // false
*/

//My Solution
function averagePair(array, num) {
  if(array.length < 2) {
      return false;
  }

  let i = 0;
  let j = 1;
  let sum = array[i] + array[j];
  let avg = sum/(2);
  while(i <= array.length-2) {
      if(j === array.length-1){
          j = 1;
          i++;
          sum = array[i] + array[j];
          avg = sum/(2);
       }

      if(avg === num){
          return true;
      } else {
          j++
          sum = array[i] + array[j];
          avg = sum/(2);
      }
  }
  return false;
}

//Udemy Solution
function averagePair(arr, num){
  let start = 0
  let end = arr.length-1;
  while(start < end){
    let avg = (arr[start]+arr[end]) / 2
    if(avg === num) return true;
    else if(avg < num) start++
    else end--
  }
  return false;
}