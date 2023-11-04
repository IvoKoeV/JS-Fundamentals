function storage(input){
    let map = new Map();

    for(let string of input){
        let [product,qty] = string.split(' ');
        
        if(!map.has(product)){
            map.set(product, +qty);
        }else{
            let currQty = map.get(product);
            let newQty = Number(currQty) + Number(qty);
            map.set(product,newQty);
        }
    }

    for(let kvp of map){
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}
storage(['tomatoes 10', 
'coffee 5',
'olives 100',
'coffee 40']);

// storage(['apple 50',
// 'apple 61',
// 'coffee 115',
// 'coffee 40']);