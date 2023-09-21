function gramophone(band,album,song){
    let duration = (album.length*band.length) * song.length/2;
     duration=Math.ceil(duration/2.5);
   
    console.log( `The plate was rotated ${duration} times.`);
}
gramophone('Black Sabbath', 'Paranoid', 
'War Pigs')