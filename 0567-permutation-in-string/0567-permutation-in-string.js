// var checkInclusion = function(str, str2) {
//     function permutations(str,res){
//     if(str.length === 0){
//         list.push(res);
        
        
//     }
//     for(let i=0;i<str.length;i++){
//         let ch =str[i];
//         let temp = str.slice(0,i)+str.slice(i+1);
//         permutations(temp, res+ch);
//     }
//  }
//  let res ="";
//  let list=[];
// permutations(str,res);
// for(let item of list){
//     if(str2.includes(item)){
//         return true;
//     }
// }
// return false;
// };

var checkInclusion = function(str1,str2){
    let map =new Map();
    for(let c of str1){
        if(!map.has(c)){
            map.set(c,0);
        }
        map.set(c, map.get(c)+1)
    }
    let m = str1.length;
    let n = str2.length;
    
    for(let i=0;i<=n-m;i++){
        let temp = new Map(map);
        let j=0;
        for(j=i;j<i+m;j++){
            let c = str2[j];
            if(temp.has(c) && temp.get(c)>0){
                temp.set(c, temp.get(c)-1);
            }else break;
        }
        if(j == i+m) return true
    }
    return false;
}