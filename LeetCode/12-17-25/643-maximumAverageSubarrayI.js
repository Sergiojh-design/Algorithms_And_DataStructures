/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let maxAvg = -Infinity;
    let tempSum = 0;
    let left = 0;

    for(let right = 0; right < nums.length; right++){
        tempSum += nums[right];

        if(right - left + 1 === k){
            maxAvg = Math.max(maxAvg, tempSum/k);
            tempSum -= nums[left];
            left++;
        }
    }

    return maxAvg;
};