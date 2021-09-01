/*
Write a function called collectStirngs which accepts an object and returns an array of all the values in the object that have a typeof string
*/

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