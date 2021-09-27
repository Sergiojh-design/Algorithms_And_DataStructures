/*
BubbleSort
- A sorting algorithm where the largest values bubble up to the top!

Time Complexity: O(n^2)
Time Complexity: O(n) -> if we know that data is very nearly sorted.
*/

//Non opimized, continue sorting even when there are no sorts to be made.
function bubbleSort(arr){
  for(let i = arr.length; i>= 0; i--){
    for(let j = 0; j > i - 1; j++){
        let temp = arr[j]
        if(arr[j] > arr[j+1]){
          arr[j] = arr[j+1];
          arr[j+1] = temp;
        }
    }
  }
  return arr;
}

//Another way of swapping
function bubbleSort(arr){
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--){
    for(let j = 0; j < i-1; j++){
      if(arr[j] > arr[j+1]){
        swap(arr, j, j+1);
      }
    }
  }
}

//Optimized if no Swaps are made break the iteration and return sorted array.
function bubbleSort(arr){
  let noSwaps;
  for(let i = arr.length; i>= 0; i--){
    noSwaps = true;
    for(let j = 0; j > i - 1; j++){
        let temp = arr[j]
        if(arr[j] > arr[j+1]){
          arr[j] = arr[j+1];
          arr[j+1] = temp;
          noSwaps = false;
        }
    }
    if(noSwaps) break;
  }
  return arr;
}