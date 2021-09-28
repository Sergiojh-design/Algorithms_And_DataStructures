/*
Merge Sort
- It's a combination of two things - merging and sorting!
- Exploits the fact that arrays of 0 or 1 element are always sorted
- Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array.

Time Complexity (Best) = O(n log n)
Time Complexity (Avg) = O(n log n)
Time Complexity (Worst) = O(n log n)
Space Complexity = O(n)
*/

function merge(arr1, arr2){
  let results = [];
  let count1 = 0;
  let count2 = 0;

  while(count1 < arr1.length && count2 < arr2.length){
      if(arr1[count1] < arr2[count2]){
          results.push(arr1[count1]);
         count1++;
      } else {
          results.push(arr2[count2]);
          count2++
      }
  }

  while(count1 < arr1.length){
      results.push(arr1[count1]);
      count1++;
  }
   while(count2 < arr2.length){
      results.push(arr2[count2]);
      count2++;
  }
  return results;
}

function mergeSort(arr){
  if(arr.length <= 1) return arr;
  let mid = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}