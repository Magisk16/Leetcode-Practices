/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(arr) {
    let n =arr.length;
    let m= arr[0].length;
    let ht = new Array(m).fill(0);

    let max=0;
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(arr[i][j] == '1'){
                ht[j]+=1;
            }else{
                ht[j]=0;
            }
        }
        max = Math.max(max, findArea(ht));
    }

    function findArea(ht){

        let stack=[];
        let maxArea=0;
        for(let i=0;i<=ht.length;i++){
            let curr = i==ht.length ? 0 : ht[i];
            while(stack.length!=0 && curr <ht[stack.at(-1)]){
                let top = stack.pop();
                let width =stack.length==0 ? i : i - (stack.at(-1))-1; 
                let area = ht[top]*width;
                maxArea = Math.max(area,maxArea);
            }
            stack.push(i);
        }
    return maxArea;
}
    return max;
};