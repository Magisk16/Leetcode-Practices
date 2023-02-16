/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(str1, str2) {
    let res = new Array(str2.length+1);
for(let i=0;i<=str1.length;i++){
    res[i] = new Array(str2.length+1).fill(0);
}
let m =str1.length;
let n =str2.length;
for(let i=0;i<=m;i++){
    for(let j=0;j<=n;j++){
        if(i==0) res[i][j]=j;
        else if (j==0) res[i][j] =i;
        else if(str1[i-1]==str2[j-1]){
            res[i][j] = res[i-1][j-1];
        }else{
            res[i][j] = 1+Math.min(res[i-1][j], res[i][j-1], res[i-1][j-1])
        }
        
    }
}
    return res[m][n];
};