//Pure Recursion

/*
 - For arrays, use methods like slice, the spread operator, and concat
 that make copies of arrays so you do not mutate them.
  - Remember that strings are immutable so you will need to use
 methods like slice, substr, or substring to make copies of strings.
 - To make copies of objects use Object.assign, or the spread
 operator.
*/

function collectOddValues(arr){
  let newArr = [];

  if(arr.length === 0) {
      return newArr;
  }

  if(arr[0] % 2 !== 0){
      newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

collectOddValues([1,2,3,4,5])
/*
collectOddValues([1,2,3,4,5])
[1].collectOddValues([2,3,4,5])
        [].collectOddValues([3,4,5])
                [3].collectOddValues([4,5])
                          [].collectOddValues([5])
                                    [5].collectOddValues([])
                                              []
*/