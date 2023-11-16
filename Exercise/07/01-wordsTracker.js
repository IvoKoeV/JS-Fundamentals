function wordsTracker(input){
    let obj ={};
    let searchingWords = input.shift().split(' ');
  

    for(let word of searchingWords){
        obj[word]=0;
    }
    for(let word of input){
        if(word in obj){
            obj[word]++;
        }
    }
    let sorted = Object.entries(obj).sort((a,b)=>b[1]-a[1]);
    for(let [word,couter] of sorted){
        console.log(`${word} - ${couter}`);
    }
}
wordsTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task' 
    ]);

// wordsTracker([
//     'is the', 
//     'first', 'sentence', 'Here', 'is', 
//     'another', 'the', 'And', 'finally', 'the',
//     'the', 'sentence']);