function vacation(groupNum,groupType,day){
    let totalPrice=0;
    let priceForOne = 0;
    
    if (day === "Friday") {
      switch (groupType) {
        case "Students":
          priceForOne = 8.45;
          break;
        case "Business":
          priceForOne = 10.9;
          break;
        case "Regular":
          priceForOne = 15;
          break;
      }
    } else if (day === "Saturday") {
      switch (groupType) {
        case "Students":
          priceForOne = 9.8;
          break;
        case "Business":
          priceForOne = 15.6;
          break;
        case "Regular":
          priceForOne = 20;
          break;
      }
    } else if (day === "Sunday") {
      switch (groupType) {
        case "Students":
          priceForOne = 10.46;
          break;
        case "Business":
          priceForOne = 16;
          break;
        case "Regular":
          priceForOne = 22.5;
          break;
      }
    }

    if(groupType ==='Students'){
        if(groupNum>=30){
            totalPrice = priceForOne*groupNum;
            totalPrice *=0.85;
        }else if(groupNum<30){
            totalPrice=priceForOne * groupNum;
        }else{
            console.log("Invalid group number!");
        }
    }else if(groupType === 'Business'){
        if(groupNum >= 100){
            totalPrice = priceForOne * groupNum;
            totalPrice = totalPrice - (priceForOne* 10)
        }else if(groupNum < 100){
            totalPrice = priceForOne * groupNum;
        }else{
            console.log("Invalid group number!");
        }
    }else if(groupType ==="Regular" ){
        if(groupNum >= 10 && groupNum<=20){
            totalPrice = priceForOne * groupNum;
            totalPrice *= 0.95;

        }else if(groupNum < 10 || groupNum > 20){
            totalPrice = priceForOne * groupNum;
        }else{
            console.log("Invalid group number!");
        }
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)

}

vacation(120,
    "Business",
    "Saturday")