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