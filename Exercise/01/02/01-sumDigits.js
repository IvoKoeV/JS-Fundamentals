function sumDigits(num) {
    let digits = String(num);
    let sum = 0;

    for (let i = 0; i < digits.length; i++) {
        let digit = parseInt(digits[i]);
        sum += digit;
    }

    console.log(sum);
}
sumDigits(245678)