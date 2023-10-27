function sortingArray(arr){
    let sortedArr = arr.sort((a,b) => a.length - b.length||a.localeCompare(b));
    console.log(sortedArr.join('\n'));
}
sortingArray(["alpha", "beta", "gamma"]);