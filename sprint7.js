function like() {
    this.isLiked = !this.isLiked;
  }
  
  function createSong(title, artist) {
    const newSong = {
      title,
      artist,
      isLiked: false,
      like: like
    }
  
    return newSong;
  }
  
  const song1 = createSong("Chanel", "Frank Ocean");
  
  song1.like(); 
  
  console.log(song1.isLiked); 

  const obj = {
    prop: "Property",
    method: function () {
      console.log(this); 
    }
  }
  
  
  obj.method();

  const powerToggle = function() {
    this.power = !this.power;
  }

  function createSmartphone(owner, model, camera) {
    const newSmartphone = {
        owner,
        model,
        camera,
        power: false,
        powerToggle : powerToggle
    }
    return newSmartphone;
  }

  const smartPhone1 = createSmartphone("Jennifer","Snailboy2", false);
  const smartPhone12 = createSmartphone("Rory", "Yandexz8", true);

  smartPhone1.powerToggle();
  console.log(smartPhone1.power);

  function prefer() {
    this.isLike = !this.isLike;
  }

  function getSongInfo() {
    return `${this.artist} - ${this.title} (${this.releaseYear})`;
  }

  function createSongs (artist,title,releaseYear) {
    const newSong = {
    artist,
    title,
    releaseYear,
    isLike : false,
    prefer,
    getSongInfo
  }
  return newSong;
}

const songex = createSongs("Mac Miller", "Circles", 2020);
console.log(songex.getSongInfo());

 