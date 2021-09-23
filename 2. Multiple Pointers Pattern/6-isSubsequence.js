/*
Multiple Pointers - isSubsequence
  Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In somewhere in the second string, wtihout their order changing.
*/

/*
Examples:
  isSubsequece('hello', 'hello world'); // true
  isSubsequece('sing', 'sting'); // true
  isSubsequece('abc', 'abracadabra'); // true
  isSubsequece('abc', 'acb'); // false (order matters)

Your solution MUST have AT LEAST the following complexities:
Time Complexity - O(N + M)
Space Complexity - O(1)
*/

//My Solution
function isSubsequece(string1, string2) {
  if(string1.length > string2.length) {
      return false;
  }

  let j = 0;
  let i = 0;
  while(j < string2.length) {
      if(string1[i] === string2[j]) {
          j++;
          i++;
      }
      if(string1[i] !== string2[j]) {
          j++;
      }
      if(i === string1.length) {
          return true;
      }
  }
  return false;
}

//Udemy Solution - Iterative
function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

//Udemy Solution - Recursive but not O(1)
function isSubsequence(str1, str2) {
  if(str1.length === 0) return true
  if(str2.length === 0) return false
  if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))
  return isSubsequence(str1, str2.slice(1))
}