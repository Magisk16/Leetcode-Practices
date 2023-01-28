/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(arr) {
    let n =arr.length
    const row = {};
    const col = {};
    const box = {};
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            const num = arr[i][j];
            if(num !=="."){
            let subBoxIndex = Math.floor(i/3)*3+ Math.floor(j/3);
            if(row[`${i}-${num}`] || col[`${j}-${num}`]|| box[`${subBoxIndex}-${num}`]){
                return false;    
            }
            row[`${i}-${num}`] =true;
            col[`${j}-${num}`] =true;
            box[`${subBoxIndex}-${num}`] =true;
        }
    }
    }
    return true;
};