/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(arr) {
    let profit=0;
    for(let i=1;i<arr.length;i++){
        if(arr[i]>arr[i-1]){
            profit+=(arr[i]-arr[i-1]);
        }
    }
    return profit;
};