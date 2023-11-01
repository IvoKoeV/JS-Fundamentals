function favouriteSong(arr){
    let songs = [];
    let numberOfSongs=arr.shift();
    let typeSong = arr.pop();
    class Song{
    constructor(type,name,time){
        this.type=type;
        this.name=name;
        this.time=time;
    }
  } 
  for (let i = 0; i <numberOfSongs ; i++) {
    let [type,name,time] = arr[i].split('_');
    let song = new Song(type,name,time);
    songs.push(song);
}
    if(typeSong === 'all'){
        songs.forEach((i) => console.log(i.name));
    }else{
        let filtered = songs.filter((i) => i.type === typeSong);
        filtered.forEach((i)=>console.log(i.name))
    }
   
}
// favouriteSong([3,
//     'favourite_DownTown_3:14',
//     'favourite_Kiss_4:16',
//     'favourite_Smooth Criminal_4:01',
//     'favourite'] );

// favouriteSong([4,
//     'favourite_DownTown_3:14',
//     'listenLater_Andalouse_3:24',
//     'favourite_In To The Night_3:58',
//     'favourite_Live It Up_3:48',
//     'listenLater'] );

favouriteSong([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']);