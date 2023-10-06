function simpleCalculator(numOne, numTwo, operator) {
  let operation = {
    multiply: numOne * numTwo,
    divide: numOne / numTwo,
    add: numOne + numTwo,
    subtract: numOne - numTwo,
  };

  if (operator in operation) {
    return operation[operator];
  } else {
    return "Invalid operator";
  }
}
console.log(simpleCalculator(40,8,'divide'));
