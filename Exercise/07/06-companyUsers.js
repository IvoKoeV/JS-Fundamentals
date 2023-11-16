function companyUsers(input){
    let company = {};

    for(let employees of input){
        let [name,employeeId] = employees.split(' -> ');
       
        if(name in company){
        if(!company[name].includes(employeeId)){
            company[name].push(employeeId);
        }
        }else{
          company[name] = [employeeId];
        }
    }
    let sorted = Object.entries(company).sort((a,b) => a[0].localeCompare(b[0]));
    for (let [companyName,iD] of sorted){
      console.log(companyName);  
      iD.forEach(id => console.log(`-- ${id}`));
    } 
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345' ]);

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111']);