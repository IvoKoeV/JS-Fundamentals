function readingRequired(pages,pgPerH,deadline){
    let hoursPerBook = pages/pgPerH;
    let hoursPerDay = hoursPerBook/deadline;
    console.log(hoursPerDay);
}
readingRequired(212, 20 ,2);