/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
   let total = 0;
   let res = nums[0];

   for(let i = 0; i < nums.length; i++){
     if(total < 0){
        total = 0
     }
     total += nums[i];
     res = Math.max(res, total);
   }

   return res;
};