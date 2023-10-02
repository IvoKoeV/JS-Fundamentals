function magicSum(arr,sum) {
    let pairs = [];
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === sum) {
                pairs.push([arr[i], arr[j]]);
            }
        }
    }
    for(let pair of pairs){
        console.log(pair.join(" "));
    }
}
magicSum([1, 7, 6, 2, 19, 23], 
    8);