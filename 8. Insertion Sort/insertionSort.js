/*
Insertion Sort
- Builds up the sort by gradually creating a larger half which is always sorted.
*/

//My Solution
function insertionSort(arr){
  for(let i = 1; i < arr.length; i++){
    let currentVal = arr[i];
    for(let j = i - 1; j >= 0; j--){
      if(currentVal < arr[j]){
        arr[j+1] = arr[j]
        arr[j] = currentVal;
      }
    }
  }
  return arr;
}

//Udemy Solution
function insertionSort(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

/*
Comparing Bubble, Selection and Insertion Sort
(These excel when the dataset is small)

Algo              Time Comp(Best)   Time Comp(Avg)  Time Comp(Worst)  Space Comp
Bubble Sort         O(n)              O(n^2)           O(n^2)           O(1)
Insertion Sort      O(n)              O(n^2)           O(n^2)           O(1)
Selection Sort      O(n^2)            O(n^2)           O(n^2)           O(1)
*/