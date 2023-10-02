function equalSums(arr){
    let foundMatch = false;
    for(let i = 0;i<arr.length;i++){
        let leftSum = arr.slice(0, i).reduce((acc, curr) => acc + curr, 0);
        let rightSum = arr.slice(i + 1).reduce((acc, curr) => acc + curr, 0);

        if(leftSum === rightSum){
            console.log(i);
            foundMatch = true;
            break;
        }
    }
    if(!foundMatch){
    console.log('no');
    }
    
}
equalSums([1, 2, 3])