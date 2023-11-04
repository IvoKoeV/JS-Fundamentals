function schoolGrades(input){
    let studentsGrades = {};

    for (let item of input) {
        let parts = item.split(' ');
        let name = parts[0];
        let grades = parts.slice(1).join(" "); 

        if (studentsGrades.hasOwnProperty(name)) {
            studentsGrades[name] += ' ' + grades;
        } else {
            studentsGrades[name] = grades;
        }
    }
    let sortedNames = Object.entries(studentsGrades)
    sortedNames.sort((a,b) => a[0].localeCompare(b[0]));
    
    for (let [name, grade] of sortedNames) {
        let individualGrades = grade.split(' '); 
        let sum = 0;
        for (let i = 0; i < individualGrades.length; i++) {
            let singleGrade = Number(individualGrades[i]);
            sum += singleGrade;
        }
        let average = sum / individualGrades.length;
        console.log(`${name}: ${average.toFixed(2)}`);
    }

}
// schoolGrades(['Lilly 4 6 6 5', 
// 'Tim 5 6',
// 'Tammy 2 4 3',
// 'Tim 6 6'] );

schoolGrades(['Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3'] );