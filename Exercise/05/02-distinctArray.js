function distinctArray(arr){
    let uniqeNums = [];
    for(let num of arr){
        if(!uniqeNums.includes(num)){
            uniqeNums.push(num);
        }
    }
    console.log(uniqeNums.join(' '));
}
distinctArray([20, 8, 12, 13, 4,
    4, 8, 5] )