function towns(arr){
    for(let town of arr){
        let [townName,latitude,longitude]=town.split(' | ');
        
        let townss={
            town:townName,
            latitude:Number(latitude).toFixed(2),
            longitude:Number(longitude).toFixed(2)
        }
        console.log(townss);
    }
}
towns(['Sofia | 42.696552 | 23.32601', 
'Beijing | 39.913818 | 116.363625'])