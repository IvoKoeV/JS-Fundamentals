function replaceRepChars(chars){
     let noRepeatsStr = '';
     let prevChar = '';

     for(let curChar of chars){
        if(curChar !== prevChar){
            noRepeatsStr += curChar;
            prevChar = curChar;
         
        }
     }
     console.log(noRepeatsStr);
}
replaceRepChars('aaaaabbbbbcdddeeeedssaa');
// replaceRepChars('qqqwerqwecccwd');