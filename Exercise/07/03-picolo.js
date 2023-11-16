function piccolo(input){
    let parkingLot = {};

    for(let cars of input){
        let [command,carNumber] = cars.split(", ");
        if(command === 'IN'){
            parkingLot[carNumber] = carNumber;
        }else if(command === 'OUT'){
            delete parkingLot[carNumber];
        }

    }
    let sortedCarNumbers = Object.entries(parkingLot).sort();
    
    if (sortedCarNumbers.length === 0) {
        console.log("Parking lot is empty");
    } else {
        for (let carsInParking of sortedCarNumbers) {
            console.log(`${carsInParking[0]}`);
        }
    }
}
// piccolo(['IN, CA2844AA', 
// 'IN, CA1234TA',
// 'OUT, CA2844AA',
// 'IN, CA9999TT',
// 'IN, CA2866HI',
// 'OUT, CA1234TA',
// 'IN, CA2844AA',
// 'OUT, CA2866HI',
// 'IN, CA9876HH',
// 'IN, CA2822UU']);

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']);