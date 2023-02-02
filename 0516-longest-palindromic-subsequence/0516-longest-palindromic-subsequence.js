/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(str) {
  let n=str.length;
let dp = [];
for(let i=0;i<n;i++){
    dp[i] = new Array(n).fill(0);
}
for(let i=0;i<n;i++){
        dp[i][i] =1;
}

for(let l=1;l<n;l++){
    for(let i=0;i+l<n;i++){
        let k = i+l;
        if(str[i] == str[k]){
            dp[i][k] = 2+dp[i+1][k-1];
        }else{
            dp[i][k] = Math.max(dp[i][k-1], dp[i+1][k]);
        }
    }
}
return dp[0][n-1];  
};