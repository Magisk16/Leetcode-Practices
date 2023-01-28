/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(arr) {
    let n =arr.length
    let isUsedRow = new Array(n).fill(0).map(_ => new Array());
    let isUsedCol = new Array(n).fill(0).map(_ => new Array());
    let isUsedSub = new Array(n).fill(0).map(_ => new Array());

    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            let num = arr[i][j];
            if(num ===".") continue;
            let subBoxIndex = Math.floor(i/3)+ Math.floor(j/3)*3;
            if(isUsedRow[i][num] || isUsedCol[j][num]||isUsedSub[subBoxIndex][num]){
                return false           
            }
            
            isUsedRow[i][num] =true;
            isUsedCol[j][num] =true;
            isUsedSub[subBoxIndex][num]=true;
        }
    }
    return true;
};