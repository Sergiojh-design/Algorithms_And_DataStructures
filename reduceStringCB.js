/*
NOT COMPLETE
Given a str parameter being passed and return the smallest number you can get through the following reduction method. This method is: Only the letters a, b and c will be given a str and you must take two different adjacent characters and replace it with the third. For example "ac" can be replace with "b" but "aa" cannot be replace with anything. This method is done repeatedly until the string cannot be further reduced, and the length of the resulting string is to be outputed.

For examle: if str is "cab" then "ca" can be reduced to "b" and you get "bb" (you can also reduce it to "cc"). The reduction is done so the output should be 2. If str is "bcab". "bc" reduces to "a", so you have "aab", then "ab" reduces to "c". and the final string "ac" is reduced to "b" so the output should be 1.
*/

/*
Input: "abcabc"
Output: 2

Input: "cccc"
Output: 4
*/

function StringChallenge(str) {
  let obj = {
    'ab': 'c',
    'ba':'c',
    'bc': 'a',
    'cb': 'a',
    'ac': 'b',
    'ca': 'b',
  }

  let array = str.split('');
  let newarray = [];

  for(var i = 0; i<array.length; i += 2){
    if(obj[array[i]+array[i+1]]){
      let value = obj[array[i]+array[i+1]]
      array = array.slice(2, array.length);
      newarray.push(value);
      i = -2;
    } else if (array.length > 2) {
      newarray.push(array[i]);
      newarray.push(array[i+1]);
      array = array.slice(2, array.length)
    } else {
      newarray.push(array[i]);
      array = array.slice(1)
    }

    if(array.length === 0){
      StringChallenge(newarray.join(''))
    }
  }

  // code goes here
  return newarray.length - 1;

}

let str = 'abcaa';
StringChallenge(str);