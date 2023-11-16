function dictionary(terms) {
    let token = {};
    for (let term of terms) {
        let tokenFromDictionary = JSON.parse(term);
        let termKey = Object.keys(tokenFromDictionary)[0];
        let definition = Object.values(tokenFromDictionary)[0];
        token[termKey] = definition;
    }

    let sortedTerms = Object.keys(token).sort((a, b) => a.localeCompare(b));

    for (let key of sortedTerms) {
        console.log(`Term: ${key} => Definition: ${token[key]}`);
    }
}
dictionary([ 
'{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}', 
'{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}', 
'{"Boiler":"A fuel-burning apparatus or container for heating water."}', 
'{"Tape":"A narrow strip of material, typically used to hold or fasten something."}', 
'{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified,transmitted, or recorded."}' 
    ])