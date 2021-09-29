/*
Quick Sort
- Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
- Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array
- Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot.

Time Complexity(Best) = O(n log n)
Time Complexity(Avg) = O(n log n)
Time Complexity(Worst) = O(n^2)
Space Complexity = O(log n)
*/

function pivot(arr, start=0, end=arr.length+1){
  let pivot = arr[start];
  let swapIdx = start;
  for(let i = start+1; i < arr.length; i++){
      if(pivot > arr[i]){
          swapIdx++;
          temp = arr[i];
          arr[i] = arr[swapIdx];
          arr[swapIdx] = temp;
      }
  }
  temp = arr[swapIdx];
  arr[swapIdx] = arr[start];
  arr[start] = temp;
  return swapIdx;
}

function quickSort(arr, left=0, right = arr.length -1){
  if(left < right){
      let index = pivot(arr, left, right);
      //left
      quickSort(arr, left, index-1);
      //right
      quickSort(arr, index+1, right);
  }
  return arr;
}