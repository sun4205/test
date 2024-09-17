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
  class Appliance {
    constructor(name) {
      this._name = name;
      this._isOn = false;
    }
  
    turnOn() {
      this._isOn = true;
      console.log(`${this._name} is now on`);
    }
  
    turnOff() {
      this._isOn = false;
      console.log(`${this._name} is now off`);
    }
  
    getInfo() {
      return {
        name: this._name,
        isOn: this._isOn,
      }
    }
  }
  
  const appliance = new Appliance('arbitrary appliance');
  
  class Toaster extends Appliance {
    constructor(name, slices) {
      super(name);
      this._name = name;
      this._slices = slices;
      this._howToasty = 1;
    }
  
    turnOn() {
      super.turnOn()
      console.log(`Toastiness is set to ${this._howToasty}`);
   }
  
    adjustToastiness(number) {
      this._howToasty = number;
    }
  
    getInfo() {
      return {
        ...super.getInfo(),
      }
    }
  }
  
  const toaster = new Toaster('Toaster', 2);
 
  const messageList = [
    {
      image: "https://code.s3.yandex.net/web-code/card__image.jpg",
      text: "Hi, we need to tune up our chat ASAP!"
    },
    {
      image: "https://code.s3.yandex.net/web-code/card__image-lake.jpg",
      text: "We can now create any number of cards!"
    },
  ];
  
  class Card {
    constructor(data, cardSelector) {
      this._text = data.text;
      this._image = data.image;
      this._cardSelector = cardSelector;
    }
    
    _getTemplate() {
      this._element = this._getTemplate();
      this._element.querySelector(".card__avatar").src = this._image;
      this._element.querySelector(".card__paragraph").textContent = this._text;
  
      this._setEventListeners();
  
      return this._element;
    }
  
    _setEventListeners() {
      this._element.querySelector(".card__text").addEventListener("click", () => {
        this._handleMessageClick();
      });
    }
  
    _handleMessageClick() {
      this._element.querySelector(".card__text").classList.toggle("card__text_is-active");
    }
  
  }
  
  messageList.forEach((item) => {
    const card = new Card(item, ".card-template_type_default");
    const cardElement = card.generateCard();
  
    document.body.append(cardElement);
  });