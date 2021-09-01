/*
Write a function called sringifyNumbers which takes in an object and finds all the values which are numbers and coverts them to strings. Recursion would be a great way to solve this!
*/

//My Solution
function stringifyNumbers(obj, newObj = {}){
  for(let keys in obj){
      if(typeof obj[keys] === 'number'){
          newObj[keys] = JSON.stringify(obj[keys]);
      } else if (typeof obj[keys] === 'object' && !Array.isArray(obj[keys])) {
          newObj[keys] = stringifyNumbers(obj[keys]);
      } else {
          newObj[keys] = obj[keys];
      }
  }
  return newObj;
}

//Udemy Solution
function stringifyNumbers(obj) {
  var newObj = {};
  for (var key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

/*
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
/*

stringifyNumbers(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/