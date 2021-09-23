/*
Write a function called collectStirngs which accepts an object and returns an array of all the values in the object that have a typeof string
*/

//My Solution
function collectStrings(obj, array=[]){
  for(let keys in obj){
      if(typeof obj[keys] === 'string'){
          array.push(obj[keys])
      } else if (typeof obj[keys] === "object") {
          array = array.concat(collectStrings(obj[keys]));
      }
  }
  return array;
}

//Udemy Solution: Helper Method Recursion Version
function collectStrings(obj) {
  var stringsArr = [];

  function gatherStrings(o) {
      for(var key in o) {
          if(typeof o[key] === 'string') {
              stringsArr.push(o[key]);
          }
          else if(typeof o[key] === 'object') {
              return gatherStrings(o[key]);
          }
      }
  }

  gatherStrings(obj);

  return stringsArr;
}

//Udemy Solution: Pure Recursion Version
function collectStrings(obj) {
  var stringsArr = [];
  for(var key in obj) {
      if(typeof obj[key] === 'string') {
          stringsArr.push(obj[key]);
      }
      else if(typeof obj[key] === 'object') {
          stringsArr = stringsArr.concat(collectStrings(obj[key]));
      }
  }

  return stringsArr;
}

const obj = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

collectStrings(obj) // ["foo", "bar", "baz"])