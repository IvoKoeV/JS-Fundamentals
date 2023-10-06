function orders(product,quantity){
    let productPrices = {
        coffee: 1.50,
        water: 1.00,
        coke: 1.40,
        snacks: 2.00,
    };

    if (product in productPrices) {
        let price = productPrices[product];
        let totalCost = price * quantity;
        console.log(totalCost.toFixed(2));
    } else {
        console.log(`Product ${product} not found.`);
    }
}
orders("water", 5);
