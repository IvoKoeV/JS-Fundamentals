function addressBook(input){
    let addressBook = {};

    for(let item of input){
        let [name,addres] = item.split(':');
        addressBook[name] = addres;
    }
    let entries = Object.entries(addressBook);
    entries.sort((a,b)=> a[0].localeCompare(b[0]));

    let sorted = {};
    for(let [name,addres] of entries ){
        sorted[name] = addres;
    }   

    for(let [name,address] of Object.entries(sorted)){
        console.log(`${name} -> ${address}`);
    }
}
addressBook(['Tim:Doe Crossing', 
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']);

// addressBook(['Bob:Huxley Rd',
// 'John:Milwaukee Crossing',
// 'Peter:Fordem Ave',
// 'Bob:Redwing Ave',
// 'George:Mesta Crossing',
// 'Ted:Gateway Way',
// 'Bill:Gateway Way',
// 'John:Grover Rd',
// 'Peter:Huxley Rd',
// 'Jeff:Gateway Way',
// 'Jeff:Huxley Rd'])