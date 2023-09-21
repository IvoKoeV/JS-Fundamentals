function specialNums(n){
    for(let i=1;i<=n;i++){
        let sum = i%10;
        sum = sum/10;
        
        console.log(sum[i],"->"?"True":"False" )

    }
}
specialNums(15);