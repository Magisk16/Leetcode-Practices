/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    let result =[0];
    for(let i=1;i<=n;i++){
    result.push(...result.slice(0).reverse().map(item => item+ 2**(i-1)));
}
    return result;
};