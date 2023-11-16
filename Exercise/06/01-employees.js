function employees(arr){
   for(let employee of arr){
    let employeee={
        name:employee,
        personalNum:employee.length,
    }
    console.log(`Name: ${employeee.name} -- Personal Number: ${employeee.personalNum}`);
   }
}
employees([ 
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ] );