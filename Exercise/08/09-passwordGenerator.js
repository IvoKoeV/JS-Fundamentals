function passwordGenerator(input){
    let [str1,str2,replacementStr] = input;
    let concatedStrPass = str1 +str2;

    let vowels = ['a','e','o','u','i'];
    let idx = 0;
    for(let char of concatedStrPass){
        if(vowels.includes(char)){
            concatedStrPass = concatedStrPass.replace(char, replacementStr[idx].toUpperCase());
            idx++;
            
            if(idx >= replacementStr.length){
                idx = 0;
            }
        }
    }
    let password = concatedStrPass.split('').reverse().join('');
    console.log(`Your generated password is ${password}`);
}
passwordGenerator([ 
    'ilovepizza',
    'ihatevegetables', 
    'orange'
    ]);
// passwordGenerator([
//     'easymoneyeazylife', 
//     'atleasttencharacters',
//     'absolute' 
//     ]);
// passwordGenerator([
//     'areyousureaboutthisone', 
//     'notquitebutitrustyou',
//     'disturbed' 
//     ]);