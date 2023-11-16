function revealWords(replacementWord,sentance){
    let words = replacementWord.split(', ');
    
    for(let word of words){
        let repeatCount = word.length;

        let starTemplate = '*'.repeat(repeatCount);
        sentance = sentance.replace(starTemplate,word);
    }
    console.log(sentance);
}
// revealWords('great', 
// 'softuni is ***** place for learning new programming languages');

revealWords('great, learning',
'softuni is ***** place for ******** new programming languages');