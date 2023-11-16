function oddOcurrences(sentence) {
    let words = sentence.toLowerCase().split(' ');
    let frequency = {};
 
    for (let i = 0; i < words.length; i++) {
        if (frequency[words[i]]) {
            frequency[words[i]]++;
 
        } else {
            frequency[words[i]] = 1;
        }
    }
 
    let frequencyArr = Object.entries(frequency);
    let filteredArr = frequencyArr.filter(element => element[1] % 2 !== 0)
    let sortedArr = filteredArr.sort((a, b) => b[1] - a[1]);
 
 
    let oddWords = [];
    for (let arr of sortedArr) {
        oddWords.push(arr[0]);
    }
 
    console.log(oddWords.join(" "));
}
oddOcurrences('Cake IS SWEET is Soft CAKE sweet Food');