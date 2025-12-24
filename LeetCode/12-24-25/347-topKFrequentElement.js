/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let numCount = {}
    let res = []
    for(let i = 0; i < nums.length; i++){
        !numCount[nums[i]] ? numCount[nums[i]] = 1 : numCount[nums[i]] += 1;
    }

    const entries = Object.entries(numCount)
    entries.sort((a,b) => b[1] - a[1]);

    for(let j = 0; j < k; j++){
        res.push(Number(entries[j][0]));
    }

    return res;
};