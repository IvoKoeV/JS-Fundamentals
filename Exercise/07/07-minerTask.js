function minerTask(input){
    let miner = {};

   for(let i=0;i<input.length;i +=2){
    let material = input[i];
    let qty = Number(input[i+1]);
    
    if(!miner.hasOwnProperty(material)){
        miner[material]=qty;
   }else{
    miner[material] += qty;
   }
}

let entries = Object.entries(miner);

for(let [material,qty] of entries){
    console.log(`${material} -> ${qty}`);
}
}

// minerTask([ 
//     'Gold',
//     '155',
//     'Silver',
//     '10',
//     'Copper',
//     '17'
//     ]);

minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]);