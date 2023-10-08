function perfectNum(num){
    let sum = 0;
    for(let devisors = 1;devisors<=num/2;devisors++){
        
        if (num % devisors === 0 ) {
           sum+=devisors;
        }
    }
    if(sum === num){
        console.log('We have a perfect number!');
    }else{
        console.log('It\'s not so perfect.');
    }
}
perfectNum(1236498)