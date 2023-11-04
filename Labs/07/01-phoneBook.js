function phoneBook(input){
    let phoneBook = {};

    for(let tokens of input){
        let [name, phoneNumber] = tokens.split(' ');
        phoneBook[name]=phoneNumber;
        
    }

    for(let keys of Object.entries(phoneBook)){
        console.log(`${keys[0]} -> ${keys[1]}`);
    }
}
phoneBook(['Tim 0834212554', 
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);

phoneBook(['George 0552554',
'Peter 087587',
'George 0453112',
'Bill 0845344']);