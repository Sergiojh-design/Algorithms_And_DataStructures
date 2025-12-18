/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let numCount = {};
    for(let i = 0; i < nums.length; i++){
        if(numCount[nums[i]]) return true;
        numCount[nums[i]] = 1;
    }
    return false;
};