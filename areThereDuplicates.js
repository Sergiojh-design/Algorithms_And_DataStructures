/*
Frequency Counter / Multiple Pointers - areThereDuplicates
  Implement a function called, areThereDuplicates which accepts a variable number of arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.

  Restrictions:
  Time - O(n)
  Space - O(n)
  Bouns:
  Time - O(n log n)
  Space - O(1)
*/

/*
Examples
  areThereDuplicates(1, 2, 3) // false
  areThereDuplicates(1, 2, 2) // true
  areThereDuplicates('a','b','c','a') // ture
*/

//MySolution
function areThereDuplicates(...args) {
  for(var i = 0; i < args.length; i++) {
      if(args[i] === args[args.length-1] && i !== args.length-1) {
          return true;
      }
  }
  return false;
}

//Udemy Frequency Counter solution
function areThereDuplicates() {
  let collection = {}
  for(let val in arguments){
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for(let key in collection){
    if(collection[key] > 1) return true
  }
  return false;
}

//Udemy Multiple Pointer solution
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a,b) => a > b);
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++
    next++
  }
  return false
}

//Udemy One Linear solution
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}