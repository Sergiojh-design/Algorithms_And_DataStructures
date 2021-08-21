function maxSubarray(arr){
  let tempSum = 0;
  let sum = -Infinity;
  for(let i = 0; i< arr.length; i++){
      tempSum = Math.max(arr[i], tempSum + arr[i]);
      sum = Math.max(tempSum, sum);
  }

return sum;
}

let array = [1, -3, 4, 5, -2]; //9
maxSubarray(array)