function maxSequence(arr) {
    let longestSequence = [];
    let currentMax = [arr[0]];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === currentMax[currentMax.length - 1]) {
            currentMax.push(arr[i]);
        } else {
            if (currentMax.length > longestSequence.length) {
                longestSequence = currentMax.slice(); // Make a copy of the currentMax array
            }
            currentMax = [arr[i]];
        }
    }
    
    if (currentMax.length > longestSequence.length) {
        longestSequence = currentMax;
    }

    console.log(longestSequence.join(" "));
}
maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])