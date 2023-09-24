function calculator(number,operator,number2){
    let result = 0;
    if(operator === "+"){
        result = number + number2;
    }else if(operator === "-"){
        result= number - number2 ;
    }else if(operator === "/"){
        result= number/number2;
    }else if(operator === '*'){
        result= number * number2;
    }else{
        console.log("Wrong operator!");
    }
    console.log(result.toFixed(2));
}
calculator(25.5,'-',
3 );