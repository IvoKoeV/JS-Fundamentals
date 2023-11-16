function pascalCaseSplitter(str) {
    let words = [];
    let currentWord = '';

    for (let char of str) {
        if (char === char.toUpperCase() && currentWord !== '') {
            words.push(currentWord);
            currentWord = char;
        } else {
            currentWord += char;
        }
    }
    words.push(currentWord);

    console.log(words.join(', ')); 
}
// pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
// pascalCaseSplitter('HoldTheDoor');
pascalCaseSplitter('ThisIsSoAnnoyingToDo');