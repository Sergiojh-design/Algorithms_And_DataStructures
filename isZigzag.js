function isZigzag(numbers) {
  if(numbers.length <= 1){
      return 0;
  }

  let tempValue = numbers[0];
  let count = 0;
  for(let i = 1; i < numbers.length; i++){
      if(numbers[i] !== tempValue){
          count++;
      }
  }

  if(count === 0){
      return [0];
  }

  let array = [];
  let i = 0;
  let j = 0;
  while(i <= numbers.length - 3) {
      if((numbers[i] < numbers[i+1] && numbers[i+1] > numbers[i+2]) || (numbers[i] > numbers[i+1] && numbers[i+1] < numbers[i+2])){
          array[i] = 1;
          i++;
      } else {
          array[i] = 0;
          i++;
      }
  }
return array;
}

let numbers = [1, 3, 4, 5, 6, 14, 14]
isZigzag(numbers);