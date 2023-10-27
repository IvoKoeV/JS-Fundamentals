function smallestTwoNums(arr) {
    // Sort the array in ascending order
    let sortedInAscending = arr.slice().sort((a, b) => {
        return a - b;
    });

    // Slice the first two elements from the sorted array
    let lowestNums = sortedInAscending.slice(0, 2);

    return lowestNums.join(" ");
}