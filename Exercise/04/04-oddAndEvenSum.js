function oddAndEvenSum(num){
    let str = num.toString();
    let oddSum = 0;
    let evenSum = 0;
    for(let i = 0 ;i <  str.length;i++){
        if(str[i]%2==0){
           evenSum +=Number(str[i]);
        }else{
            oddSum += Number(str[i]);
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum( 1000435);