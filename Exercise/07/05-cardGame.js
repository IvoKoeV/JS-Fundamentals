function cardGames(input){
    let cardsPlayers = {};
    let cardsPower = {2: 2,3 :3,4: 4,5: 5,6: 6,7: 7,8: 8,9: 9,10: 10,J: 11,Q: 12,K: 13,A: 14};
    let paintPower = {S: 4,H: 3,D: 2,C: 1};

    for(let card of input){
        let [playerName,cardsAsStr] = card.split(": ");
        let cards = cardsAsStr.split(', ')
        if(cardsPlayers[playerName]){
            cardsPlayers[playerName].push(...cards);
        }else{
            cardsPlayers[playerName] = cards;
        }
    }
    let entries = Object.entries(cardsPlayers);
    for(let [playerName,deck] of entries){
        let uniqueDeck = new Set(deck);
        let valueSum = 0;
        for(let card of uniqueDeck){
            let power = card.slice(0, card.length - 1);
            let type = card[card.length-1];

            let cardValue = cardsPower[power] * paintPower[type];
            valueSum += cardValue;
        }
        console.log(`${playerName}: ${valueSum}`);
    
        }
    
    }


cardGames([ 
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ]);

// cardGames([
//     'John: 2C, 4H, 9H, AS, QS',
//     'Slav: 3H, 10S, JC, KD, 5S, 10S',
//     'Alex: 6H, 7S, KC, KD, 5S, 10C',
//     'Thomas: QH, QC, JS, JD, JC',
//     'Slav: 6H, 7S, KC, KD, 5S, 10C',
//     'Thomas: QH, QC, JS, JD, JC',
//     'Alex: 6H, 7S, KC, KD, 5S, 10C',
//     'Thomas: QH, QC, JS, JD, JC',
//     'John: JD, JD, JD, JD'
//     ]);