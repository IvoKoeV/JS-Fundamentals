function censoredWords(input,occWord){
   let censored = input.replace(occWord,repeat(occWord));
   while(censored.includes(occWord)){
    censored = censored.replace(occWord, repeat(occWord));

   }
   function repeat(){
    return '*'.repeat(occWord.length);
   }
  console.log(censored);
}
censoredWords('A small sentence with some words','small');
censoredWords('Find the hidden word', 'hidden');