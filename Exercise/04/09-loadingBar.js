function loadingBar(num) {
   
    if (num < 0 || num > 100 || num % 10 !== 0) {
      console.log("Invalid input. Please provide a number in the range 0-100 divisible by 10.");
      return;
    }
  
    const blocksToFill = num / 10;
  
    let loadingBar = "["
    for (let i = 0; i < blocksToFill; i++) {
      loadingBar += '%';
    }
    for (let i = blocksToFill; i < 10; i++) {
      loadingBar += '.';
    }
    loadingBar += ']';
  
   if (num < 100) {
    console.log(num + "% " + loadingBar);
    console.log("Still loading...");
  } else if (num === 100) {
    console.log(num + "% " + 'Complete!');
    console.log(loadingBar);
  }
}
loadingBar(100);