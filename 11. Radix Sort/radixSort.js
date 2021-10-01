/*
Radix Sort
- Radix sort is a special sorting algorithm that works on lists of numbers
- It never makes comparisons between elements!
- It exploits the fact that information about the size of a number is encoded in the number of digits.
- More digits means a bigger number!

Time Complexity(Best) = O(nk)
Time Complexity(Avg) = O(nk)
Time Complexity(Worst) = O(nk)
Space Complexity = O(n + k)
  n - length of array
  k - number of digits(average)
*/

//Given a number and an index, get the number at that location.
//E.g. num = 1235, i = 0 => 5
function getDigit(num, i){
  return Math.floor(Math.abs(num) / Math.pow(10,i)) % 10;
}

//Given a number get the length of that number
//E.g. num = 1235 => 4
function digitCount(num){
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
  // return num.toString().length;
}

//Given an array of numbers return the length of the max number
//E.g. nums = [1234, 56, 7] => 4
function mostDigits(nums){
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++){
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
  // let max = Math.max(...nums);
  // return digitCount(max);
}


/*
RADIX SORT PSEUDOCODE
- Define a function that accepts list of numbers
- Figure out how many digits the largest number has
- Loop from k=0 up to this largest number of digits
- For each iteration of the loop:
  - Create buckets for each digit (0 to 9)
  - place each number in the corresponding bucket based on its kth digit
- Replace our existing array with values in our buckets, starting with 0 and going up to 0
- return list at the end!
*/

function radixSort(nums){
  let maxDigitCount = mostDigits(nums);
  for(let k = 0; k < maxDigitCount; k++){
    let digitBuckets = Array.from({length: 10}, () => []);
    for(let i = 0; i < nums.length; i++){
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

//My Solution
function radixSort(arr){
  let maxNum = mostDigits(arr);
  let list = [[],[],[],[],[],[],[],[],[],[]];
  for(let i = 0; i < maxNum; i++){
      for(let j = 0; j < arr.length; j++){
          let value = getDigit(arr[j], i);
          if(value === 0) list[0].push(arr[j]);
          else if (value === 1) list[1].push(arr[j]);
          else if (value === 2) list[2].push(arr[j]);
          else if (value === 3) list[3].push(arr[j]);
          else if (value === 4) list[4].push(arr[j]);
          else if (value === 5) list[5].push(arr[j]);
          else if (value === 6) list[6].push(arr[j]);
          else if (value === 7) list[7].push(arr[j]);
          else if (value === 8) list[8].push(arr[j]);
          else if (value === 9) list[9].push(arr[j]);
      }
      arr = list.flat();
      list = [[],[],[],[],[],[],[],[],[],[]];
  }
  return arr;
}