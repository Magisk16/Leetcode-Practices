/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let rows = board.length, cols = board[0].length;
    let visited = [];
    
    for(let i=0; i<rows; i++) {
        visited[i] = [];
        for(let j=0; j<cols; j++) {
            visited[i][j] =  false;
        }
    }
    
    for(let i=0; i<rows; i++) {
        for(let j=0; j<cols; j++) {
            if(board[i][j] == word[0] && traverse(board, i, j, 0, word, visited))
               return true;
        }
    }
    
    return false;
};

function traverse(board, i, j, index, word, visited) {
    if (i < 0 || i>=board.length || j < 0 || j >=board[i].length || board[i][j] !== word[index] || visited[i][j])
        return false;
    
    if(index + 1 == word.length) return true;
    
    visited[i][j] = true;
    
    if(
        traverse(board, i + 1, j, index+1, word, visited) ||
        traverse(board, i - 1, j, index+1, word, visited) ||
        traverse(board, i, j + 1, index+1, word, visited) ||
        traverse(board, i, j - 1, index+1, word, visited) )
        return true;
    
    visited[i][j] = false;

    return false;
};