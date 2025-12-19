/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let minLen = Infinity;
    let left = 0;
    let sum = 0;

    for(let right = 0; right < nums.length; right++){
        sum += nums[right];

        while(sum >= target){
            minLen = Math.min(minLen, right - left + 1);
            sum -= nums[left];
            left += 1;
        }
    }

    return minLen === Infinity ? 0 : minLen;
};