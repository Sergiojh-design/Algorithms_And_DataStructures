/*
Sliding Window - findLongestSubstring

Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
*/

/*
Examples:
  findLongestSubstring('') // 0
  findLongestSubstring('rithmschool') // 7
  findLongestSubstring('thisisawesome') // 6
  findLongestSubstring('thecatinthehat') // 7
  findLongestSubstring('bbbbbb') // 1
  findLongestSubstring('longestsubstring') // 8
  findLongestSubstring('thisishowwedoit') // 6

  Time Complexity - O(n)
*/

//MySolution
function findLongestSubstring(string) {
  if(string.length === 0){
    return 0;
  }

  let obj = {};
  let i = 0;
  let j = 0;
  let k = 0;
  let value = 0;
  let tempValue;
  while(k < string.length) {
    if(obj[string[i]] || string[i] === undefined) {
      tempValue = j;
      j = 0;
      k++;
      i = k;
      obj = {};
    } else {
      obj[string[i]] = 1;
      i++;
      j++;
    }
    if(tempValue > value){
      value = tempValue;
    }
  }
  return value;
}

//Udemy Solution
function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}