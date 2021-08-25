
/*
Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flatten.
*/

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

//My Solution
function flatten(array){
  let flatArray = [];
  let helper = array => {
    if(!Array.isArray(array)){
      flatArray.push(array);
      return array;
    }
    array.forEach(value => (helper(value)));
  }
  helper(array);
return flatArray;
}

//Udemy Solution
function flatten(oldArr){
  var newArr = []
  	for(var i = 0; i < oldArr.length; i++){
    	if(Array.isArray(oldArr[i])){
      		newArr = newArr.concat(flatten(oldArr[i]))
    	} else {
      		newArr.push(oldArr[i])
    	}
  }
  return newArr;
}