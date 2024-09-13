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

class SimpleClass {
    simpleMethod(){
        console.log("so simple");
    }
}

const instance = new SimpleClass();
instance.simpleMethod();

 

class PodcastEpisode {
    constructor(title,artist,guest,duration){
      this.title = title,
      this.artist = artist,
      this.guest = guest,
      this.duration = duration,
      this.isLiked = false
    }
    like(){
      this.isLiked = !this.isLiked;
    }
  
    getEpisodeInfo(){
    return `${this.artist} "${this.title}" - ${this.guest} (${this.getFormattedDuration()} seconds`;
  }
    getFormattedDuration() {
      const minutes = Math.floor(this.duration / 60); 
      const seconds = this.duration % 60; 
      return `${minutes}:${seconds > 9 ?  seconds : "0" + seconds}`; 
  }
    
  }

  class Car {
    constructor(maxGasTankValue, fuelConsumption) {
      this._gasTankValue = 0;
      this._maxGasTankValue = maxGasTankValue;
      this._fuelConsumption = fuelConsumption; // miles per gallon
    }
  
    _getAvailableGasValue(gasValue) {
      if (gasValue < 0) return 0;
      if (gasValue > this._maxGasTankValue) return this._maxGasTankValue;
      return gasValue;
    }
      
    refuel(gasValue) {
      this._gasTankValue = this._getAvailableGasValue(gasValue);
    }
      
    getDistance() {
      return this._gasTankValue / this._fuelConsumption * 100;
    }
  }
  
  const car = new Car(70, 9);
  car.refuel(45);
  
  console.log(car._gasTankValue); 
  console.log(car.getDistance()); 
  
  class Student {
    constructor(name, group) {
      this._name = name;
      this._group = group;
      this._profession = null;
      this._trainingDuration = null;
    }
  
    getInfo() {
      return {
        name: this._name,
        group: this._group,
        profession: this._profession,
        trainingDuration: this._trainingDuration
      }
    }
  }
  class WebDeveloperStudent extends Student {
    constructor(name, group) {
      super(name, group);
      this._profession = "Web developer";
      this._trainingDuration = 10;
    }
  } 
  
  class PythonDeveloperStudent extends Student {
    constructor(name, group) {
      super(name, group);
      this._profession = "Python developer";
      this._trainingDuration = 9;
    }
  }
  
  class DataAnalystStudent extends Student {
    constructor(name, group) {
      super(name, group);
      this._profession = "Data analyst";
      this._trainingDuration = 6;
    }
  }

 