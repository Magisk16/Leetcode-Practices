/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(str) {
//     for(let i=0;i<str.length;i++){
//   if(str[i]=='/' && str[i+1]==null){
//     str=str.substring(0,i);
//   }
//   if(str[i]=='.'){
//     str=str[i-1];
//   }
//   if(str[i]=='/'&& str[i+1]=='/'){
//     str = str.substring(0,i)+str.substring(i+1)
//   }
// }
//     return str;
    
    let stack =[];
    str = str.split('/').filter(k => k && k!='.');
    for(let item of str){
        item == '..'? stack.pop(): stack.push(item);
    }
    return '/'+stack.join('/');
};