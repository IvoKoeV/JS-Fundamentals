function personInfo(firstName,lastName,age){
    let person = {
        firstName: firstName,
        lastName: lastName,
        age: Number(age),
    }
    return person;
}
console.log(personInfo("Peter", "Pan","20"));
// personInfo("George", "Smith","18" );