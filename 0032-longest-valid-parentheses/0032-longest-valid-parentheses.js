/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(str) {
    let openParenCount=0;
    let closeParenCount=0;
    let maxLen =0;
    for(let i=0;i<str.length;i++){
        if(str[i] == '('){
            openParenCount++;
        }
        if(str[i] == ')'){
            closeParenCount++;
        }
        if(openParenCount == closeParenCount){
            maxLen = Math.max(maxLen, openParenCount+closeParenCount);
        }else if(closeParenCount > openParenCount){
            openParenCount =0;
            closeParenCount =0;
        }
    }
    openParenCount=0;
    closeParenCount=0;
    for(let i=str.length-1;i>=0;i--){
        if(str[i] == '('){
            openParenCount++;
        }
        if(str[i] == ')'){
            closeParenCount++;
        }
        if(openParenCount == closeParenCount){
            maxLen = Math.max(maxLen, openParenCount+closeParenCount);
        }else if(openParenCount > closeParenCount){
            openParenCount =0;
            closeParenCount =0;
        }
    }
    return maxLen;
};