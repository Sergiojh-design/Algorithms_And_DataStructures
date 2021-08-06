/*
Freqency Counter - validAnagram

Given two strings, write a function to determine if the second string is an anagram of the
first. An anagram is a word, phrase, or name formed by rearranging the letters of another,
such as cinema, fromed from iceman.
*/

/*
Examples:
validAnagram(' ', ' ')  //true
validAnagram('aaz', 'zza')  //false
validAnagram('anagram', 'nagaram')  //true

Note: You may assume the string contains only lowercase alphabets.
Time Complexity - O(n)
*/

function validAnagram (string1, string2) {

  if(string1.length !== string2.length) {
      return false;
  }

var feqCounter1 = {};
var feqCounter2 = {};

  for (var i = 0; i < string1.length; i++) {
   feqCounter1[string1[i]] ? feqCounter1[string1[i]] += 1 : feqCounter1[string1[i]] = 1;
   feqCounter2[string2[i]] ? feqCounter2[string2[i]] += 1 : feqCounter2[string2[i]] = 1;
//      feqCounter1[string1[i]] = (feqCounter1[string1[i]] || 0) + 1;
//      feqCounter2[string2[i]] = (feqCounter2[string2[i]] || 0) + 1;
  }

  for (let key in feqCounter1) {
      if(!(key in feqCounter2)) {
          return false;
      }

      if(feqCounter1[key] !== feqCounter2[key]) {
          return false;
      }
  }

return true;
}