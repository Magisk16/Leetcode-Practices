
var strStr = function(str1, str2) {
  for(let i=0;i<str1.length;i++){
    let str = str1.slice(i,i+str2.length);
    if(str == str2){
        return i;
    }
}
    return -1;
};