//Codesignal practice test Q2
function mostFrequentDigits(a) {
  let string = a.join('');
  let obj1 = {};
  for(var i = 0; i < string.length; i++) {
      obj1[string[i]] ? obj1[string[i]] +=1 : obj1[string[i]] = 1;
  }

  let maxProp = 0;
  for(let keys in obj1){
      if(obj1[keys] >= maxProp){
          maxProp = obj1[keys];
      }
  }

  let array = [];
  for(let keys in obj1){
      if(obj1[keys] === maxProp ){
          array.push(Number(keys));
      }
  }
  array = array.sort();
  return array;
}
let a = [253, 2, 0, 57, 38, 41];
mostFrequentDigits(a);