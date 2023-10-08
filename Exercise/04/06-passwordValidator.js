function passwordValidator(password){
    let isValidLength = passwordLengthValidator(password);
    let isOnlyLetterAndDigits = checkLettersAndDigits(password);
    let isMin2Digits = checkMin2Digits(password);

    if(isValidLength&&isOnlyLetterAndDigits&&isMin2Digits){
        console.log('Password is valid');
    }

    function passwordLengthValidator(password) {
        if(password.length>=6 && password.length<=10){
            return true;
        }else{
            console.log("Password must be between 6 and 10 characters");
            return false;
        }
    }
    
    function checkLettersAndDigits(password) {
        for(let curChar of password){
            let code = curChar.charCodeAt(0);
            if(
                !((code >=48 && code<=57)||
                (code >=65 && code <=90) ||
                (code >=97 && code <=122))
            ){
                console.log('Password must consist only of letters and digits');
                return false;
            }
        }
        return true;
    }
    function checkMin2Digits(password){
        let digisCount = 0;
        for(let curChar of password){
            let code = curChar.charCodeAt(0);
            if(code>=48 && code<=57){
                digisCount++;
            }
        }
        if(digisCount<2){
            console.log('Password must have at least 2 digits');
            return false;
        }else{
            return true;
        }
    }
}
passwordValidator('logIn');