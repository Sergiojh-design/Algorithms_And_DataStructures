/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let res = 0;
    let majority = 0;

    for(let i = 0; i < nums.length; i++){
        if(majority === 0){
            res = nums[i];
        }

        majority += nums[i] === res ? 1 : -1;
    }

    return res;
};