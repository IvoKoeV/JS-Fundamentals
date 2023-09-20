function login(input) {
    let username = input[0];
    let reversedPassword = username.split("").reverse().join("");
    
    for (let i = 1; i <= 4; i++) { // Loop for a maximum of 4 tries.
        let password = input[i];
        if (password !== reversedPassword) {
            if (i < 4) {
                console.log("Incorrect password. Try again.");
            } else {
                console.log(`User ${username} blocked!`);
            }
        } else {
            console.log(`User ${username} logged in.`);
            return; // Exit the loop and function since the user is logged in successfully.
        }
    }
}
login(['Acer','login','go','let me in','recA']);
