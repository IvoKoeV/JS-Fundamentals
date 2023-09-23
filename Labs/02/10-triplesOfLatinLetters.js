function latinLetters(num){
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            for (let k = 0; k < num; k++) {
                const letterA = String.fromCharCode(97 + i);
                const letterB = String.fromCharCode(97 + j);
                const letterC = String.fromCharCode(97 + k);
    
                console.log(letterA + letterB + letterC);
            }
        }
    }

}
latinLetters('3')