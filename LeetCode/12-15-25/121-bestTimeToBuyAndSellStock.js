/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    let min = Infinity;
    for(i = 0; i < prices.length; i++){
        min = Math.min(prices[i] , min)
        max = Math.max(prices[i] - min, max)
    }
    return max;
};