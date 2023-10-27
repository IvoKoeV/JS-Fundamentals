function bombNums(seqNums,bombNums){
    let specialNum = bombNums[0];
    let detonator = bombNums[1];

    while(seqNums.includes(specialNum)){
        let indexOfSpecialNum = seqNums.indexOf(specialNum);
        seqNums.splice(Math.max(0,indexOfSpecialNum - detonator), detonator * 2 + 1,0);

    }
    let sum = 0;

    for(let num of seqNums){
        sum += num;
    }
    console.log(sum);
}
bombNums([1, 2, 2, 4, 2, 2,
    2, 9], 
    [4, 2])