/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(arr, amt) {
    let n = arr.length;
let dp =[];
for(let i=0;i<=arr.length;i++){
    dp.push(new Array(amt+1).fill(0));
}

for(let i=0;i<=n;i++){
    for(let j=0;j<=amt;j++){
        if(i==0){
            dp[i][j] = Infinity;
        }else if(j==0){
            dp[i][j] = 0;
        }
        else if(arr[i-1]>j){
            dp[i][j] = dp[i-1][j];
        }else{
            dp[i][j] = Math.min(1+dp[i][j-arr[i-1]], dp[i-1][j]);
        }
    }
}
    return dp[n][amt] == Infinity?-1:dp[n][amt]
};