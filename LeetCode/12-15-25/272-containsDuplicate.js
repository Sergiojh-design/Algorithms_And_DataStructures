/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let numCount = {};
    for(i = 0; i < nums.length; i++){
        if(numCount[nums[i]] === undefined) {
            numCount[nums[i]] = 1
        } else {
            return true;
        }
    }
    return false;
};