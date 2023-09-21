function calculatePyramidResources(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let height = 0;
  
    while (base > 2) {
      const currentStepArea = base * base;
      const currentStepHeight = increment;
      const stepPerimeter = 4 * (base - 1);
      
      if (base % 5 === 0) {
        lapisLazuli += stepPerimeter * currentStepHeight;
      } else {
        marble += stepPerimeter * currentStepHeight;
      }
      
      stone += (currentStepArea - stepPerimeter) * currentStepHeight;
      height += currentStepHeight;
      base -= 2;
    }
    
    // The top step is made entirely of gold
    gold = base * base * increment;
    height += increment;
    
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);
  }
pyramid(11,1)