/*
Naive String Search

- Suppose you want to count the number of times a smaller string appear in a longer string
- A straightforward approach involves checking paris of characters individually
*/

function naiveSearch(long, short){
  var count = 0;
  for(var i = 0; i < long.length; i++){
    for(var j = 0; j < short.length; j++){
      if(short[j] !== long[i+j]){
        break;
      }
      if(j === short.length - 1){
        count++;
      }
    }
  }
  return count;
}