/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amt, arr) {
    let dp =[];
    let n =arr.length;
for(let i=0;i<=arr.length;i++){
    dp.push(new Array(amt+1).fill(0));
}

for(let i=0;i<=n;i++){
    for(let j=0;j<=amt;j++){
        if(j==0){
            dp[i][j] = 1;
        }
        else if(i==0){
            dp[i][j] = 0;
        }
        else if(arr[i-1]>j){
            dp[i][j] = dp[i-1][j];
        }else{
            dp[i][j] = (dp[i-1][j] + dp[i][j-arr[i-1]])
        }
    }
}
    return dp[n][amt]

};