/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let charSet = {};
    let maxLength = 0;
    let left = 0;

    for(let right = 0; right < s.length; right++){
        if(charSet[s[right]]){
            left = Math.max(left, charSet[s[right]]);
        }

        maxLength = Math.max(maxLength, right - left + 1);
        charSet[s[right]] = right + 1;
    }

    return maxLength;
};