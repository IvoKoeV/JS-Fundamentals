function subStr(searchWord,sentance){
    sentance = sentance.toLowerCase().split(' ');
    

   if(sentance.includes(searchWord)){
    console.log(searchWord);
   }else{
    console.log(`${searchWord} not found!`);
   }
}
// subStr('javascript','JavaScript is the best programming language');

subStr('python','JavaScript is the best programming language');