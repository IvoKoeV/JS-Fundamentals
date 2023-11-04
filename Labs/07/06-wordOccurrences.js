function wordOccurence(input){
    let obj = {};



    for (let word of input) {
        let words = word.split(' ');
        if (obj[word]) {
            
            obj[word]++;
        } else {
            obj[word] = 1;
        }
    }
    let sorting = Object.entries(obj).sort((a,b) => b[1] - a[1]);

    for(let [word,times] of sorting){
        console.log(`${word} -> ${times} times`);
    }
}
wordOccurence(["Here", "is", "the", "first", "sentence", 
"Here", "is", "another", "sentence", "And",
"finally", "the", "third", "sentence"])