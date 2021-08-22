/*
Divide and Conquer (1 of many examples)
This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.
This pattern can tremendously decrease time complexity.

This example is Log(N)
*/

function binarySearch(array, val) {

  let min = 0;
  let max = array.length -1;

  while (min < max) {
    let middle = Math.floor((min+max) / 2);
    let currentElement = array[middle];

    if (array[middle] < val) {
      min = middle + 1;
    } else if (array[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}