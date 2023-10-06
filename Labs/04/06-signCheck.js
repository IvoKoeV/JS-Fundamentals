function checkProductSign(numOne, numTwo, numThree) {
    // Count the number of negative numbers
    let negativeCount = 0;

    if (numOne < 0) {
        negativeCount++;
    }
    if (numTwo < 0) {
        negativeCount++;
    }
    if (numThree < 0) {
        negativeCount++;
    }

    // Determine the sign based on the number of negatives
    if (negativeCount % 2 === 0) {
        return "Positive";
    } else {
        return "Negative";
    }
}

console.log(signCheck(-6, -12, 14));