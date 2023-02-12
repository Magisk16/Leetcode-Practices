var findRepeatedDnaSequences = function(str) {
    let visited ={};
    let res =[];
    let i=0;
    while(i+10<=str.length){
        let substring = str.slice(i,i+10);
        // console.log(substring);
        if(!visited[substring]){
            visited[substring] =1;
        }else{
            visited[substring]+=1;
        }
        if(visited[substring]===2) res.push(substring);
        i++;
    }
    return res;
};
