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