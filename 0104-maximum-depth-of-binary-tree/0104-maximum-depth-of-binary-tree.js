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
 * @return {number}
 */
var maxDepth = function(root) {
    let l,r;
    let temp =root;
    if(temp==null) return 0;
    l= maxDepth(temp.left)
    r= maxDepth(temp.right)
    if(l<r){
        return r+1;
    }else{
        return l+1;
    }
};