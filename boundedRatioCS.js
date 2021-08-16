//Codesignal practice test Q1
function boundedRatio(a, l, r) {
  let array = [];
  let value;
  for(var i = 0; i < a.length; i++){
      value = a[i]/(i+1);
      if(value % 1 === 0){
          if(value >= l && value <= r){
              array[i] = true;
          } else {
              array[i] = false;
          }
      } else {
          array[i] = false;
      }
  }ß
return array;
}


let a = [8, 5, 6, 16, 5];
let l = 1;
let r = 3;
boundedRatio(a, l, r);