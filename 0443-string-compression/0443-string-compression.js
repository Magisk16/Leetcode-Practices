/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let s = "";
  let prevChar;
  let count = 0;
  for (let i=0 ; i<chars.length+1;i++) {
    if (chars[i] === prevChar || !prevChar) {
      count++;
    }else{
      s += prevChar;
      s += count === 1 ? "" : count.toString();
      count = 1;
    }
    prevChar = chars[i];
  }
  chars.length = s.length;
  for(let i=0;i<s.length;i++){
    chars[i]=s[i];
  }
    
};