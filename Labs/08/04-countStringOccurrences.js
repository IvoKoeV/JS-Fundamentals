function countStrOcc(str,occWord){
    let sentence = str.split(' ');
    let count = 0
    for(let word of sentence){
        if (word === occWord) {
           count++;
        } 
    }
    console.log(count);
}
countStrOcc('This is a word and it also is a sentence','is');
countStrOcc('softuni is great place for learning newprogramming languages','softuni')