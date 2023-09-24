function gladiatorExpenses(losesCount,helmetPrice,swordPrice,shieldPrice,armorPrice){
    let brokenHelmet=0;
    let brokenSword = 0;
    let brokenArmor = 0;
    let brokenShield = 0;
    let totalExpenses = 0;
    
    for(let i=1;i<=losesCount;i++){
        if(i%2==0){
            brokenHelmet++;
        }else if(i%3==0){
            brokenSword++ ;
        }else if(i%2==0 && i % 3 ==0){
            brokenShield++;
        }else if(brokenShield%2==0){
            brokenArmor++;
        }else{
            break;
        }
    }
    totalExpenses = (brokenHelmet * helmetPrice) +
    (brokenSword * swordPrice) +
    (brokenShield * shieldPrice) +
    (brokenArmor * armorPrice);
    console.log(`Gladiator expenses: ${totalExpenses} aureus`);
}
gladiatorExpenses(7,2,3,4,5);