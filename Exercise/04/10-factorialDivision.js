function factorialDivision(num1, num2) {
    const factorial1 = calcFactorial(num1);
    const factorial2 = calcFactorial(num2);

    if (factorial2 === 0) {
        console.log("Division by zero is not allowed.");
        return;
    }
    function calcFactorial(num) {
        if (num < 0) {
            console.log("Factorial is not defined for negative numbers.");
            return 0;
        }
    
        let result = 1;
        for (let i = 1; i <= num; i++) {
            result *= i;
        }
    
        return result;
    }

    const divisionResult = factorial1 / factorial2;
    console.log(divisionResult.toFixed(2));
}

factorialDivision(6,2);