function addNSubtract(arr){
    let oldSum = 0;
    for(let i = 0;i < arr.length;i++){
        oldSum += arr[i];
        if(arr[i]%2===0){
            arr[i] += i;
            
        }else{
            arr[i] -= i;
        }
    }
    let newSum = 0;
    console.log(arr);
    console.log(oldSum);
    for(let j = 0;j<arr.length;j++){
        newSum +=arr[j];
    }
    console.log(newSum);
}
addNSubtract([-5, 11, 3, 0, 2]);