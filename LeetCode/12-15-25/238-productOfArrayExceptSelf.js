/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let prefix = [];
    for(i = 0; i < nums.length; i++){
        if(i === 0){
            prefix[i] = 1;
        } else {
            prefix[i] = nums[i - 1] * prefix[i - 1];
        }
    }

    let sufix = []
    for(j = nums.length - 1; j >= 0; j--){
        if(j === nums.length - 1){
            sufix[j] = 1;
        } else {
            sufix[j] = nums[j + 1] * sufix[j + 1];
        }
    }

    let results = [];
    for(i = 0; i < nums.length; i++){
        results[i] = prefix[i] * sufix[i];
    }

    return results;
};