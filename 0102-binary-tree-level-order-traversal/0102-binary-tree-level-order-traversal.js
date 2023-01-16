/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let res =[];
    if(!root) return [];
    let queue =[root];
    while(queue.length){
        let len =queue.length;
        res.push(queue.map(root => root.val));
        while(len){
            root = queue.shift();
            if(root.left) queue.push(root.left);
            if(root.right) queue.push(root.right);
            len-=1;
        }
    }
    return res;
    
    
};