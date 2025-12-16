/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let diffObj = {}
    for(i = 0; i < nums.length; i++){
        let diff = target - nums[i];
        if(diffObj[nums[i]] !== undefined) return [diffObj[nums[i]], i]
        diffObj[diff] = i;
    }
};