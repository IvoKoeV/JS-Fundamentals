function lettersChange(str) {
    let stringArray = str.split(/\s+/);
    let totalSum = 0;

    for (let element of stringArray) {
        let gameStat = element.split('');
        let number = parseInt(gameStat.slice(1, gameStat.length - 1).join(''), 10);

        if (/^[A-Z]$/.test(gameStat[0])) {
            let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            let position = alphabet.indexOf(gameStat[0]) + 1;
            totalSum += number / position;
        } else if (/^[a-z]$/.test(gameStat[0])) {
            let alphabet = 'abcdefghijklmnopqrstuvwxyz';
            let position = alphabet.indexOf(gameStat[0]) + 1;
            totalSum += number * position;
        }

        let lastLetter = gameStat[gameStat.length - 1];
        if (/^[A-Z]$/.test(lastLetter)) {
            let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            let position = alphabet.indexOf(lastLetter) + 1;
            totalSum -= position;
        } else if (/^[a-z]$/.test(lastLetter)) {
            let alphabet = 'abcdefghijklmnopqrstuvwxyz';
            let position = alphabet.indexOf(lastLetter) + 1;
            totalSum += position;
        }
    }
    console.log(totalSum.toFixed(2));
}
// lettersChange('A12b s17G');
// lettersChange('P34562Z q2576f   H456z');
lettersChange('a1A');
