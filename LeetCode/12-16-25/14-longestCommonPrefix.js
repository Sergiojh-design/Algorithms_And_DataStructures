/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs.sort()

    let first = strs[0];
    let last = strs[strs.length - 1];
    let str = "";

    for(let i = 0; i < first.length; i++){
        if(first[i] === last[i]){
            str = str+first[i];
        } else {
            return str;
        }
    }
    return str;
};