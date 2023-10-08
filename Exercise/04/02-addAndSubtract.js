function addNSubtract(num1,num2,num3){
    let addSum = calc(num1,num2);
    let result = calc2(addSum,num3);

    console.log(result);

    function calc(num1,num2){
        return num1 + num2;
    }
    function calc2(num1,num2){
        return  num1 - num2 ;
    }
}
addNSubtract(23,6,10);