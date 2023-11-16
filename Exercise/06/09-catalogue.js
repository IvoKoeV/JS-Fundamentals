function catalogue(array) {
    let products = [];

    for (let i = 0; i < array.length; i++) {
        let tokens = array[i].split(' : ');
        let product = {
            name: tokens[0],
            price: Number(tokens[1])
        };
        products.push(product);
    }

    // Sort the products by name
    products.sort((a, b) => a.name.localeCompare(b.name));

    let currentInitial = '';

    for (let product of products) {
        let initial = product.name[0];
        if (initial !== currentInitial) {
            console.log(initial);
            currentInitial = initial;
        }
        console.log(`  ${product.name}: ${product.price}`);
    }
}
catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ])