const house = {
  bedrooms: 3,
  heat: "gas",
  hasBasement: true,
};

const keretHouse = {
  bedrooms: 1,
  heat: "gas",
  hasBasement: false,
  architect: {
    name: "Jakub Szczęsny",
    homeCountry: "Poland",
    yearOfBirth: 1973,
  },
};
const obj = {
  one: 1,
  two: 2,
  three: 3,
};

console.log(obj.one);
console.log(obj.two);
console.log(obj.three);

obj.four = 4;
console.log(obj);

const dinner = {};
const dish = "fish";

dinner.mainCourse = dish;
console.log(dinner.mainCourse);

let dish1 = "fish";

const dinner1 = {
  dish1: dish1,
};

dish1 = "neither fish nor fowl";

console.log(dinner1.dish1);

const human = "Finn";
const dog = "Jake";
const princess = "Bubblegum";

function getCartoonName() {
  return "Adventure Time";
}

const cartoon = {
  human,
  dog,
  princess,
  getCartoonName,
};

//const cartoon = { human, dog, princess, getCartoonName };

const welcomeMessages = {
  english: "Welcome",
  french: "Bienvenue",
  italian: "Benvenuto",
  spanish: "bienvenido",
  russian: "Добро пожаловать",
  chinese: "歡迎",
  finnish: "Tervetuloa",
};

console.log(welcomeMessages.finnish);

const object = {
  one: 1,
};

const key = "one";

console.log(object[key]);

const obj2 = {
  "Student Name": "Amelia",
};

const part1 = "Student";
const part2 = "Name";

const key1 = `${part1} ${part2}`;

console.log(obj2[key1]);

const birthday = {
  amelia: {
    month: "February",
    day: 12,
  },
  lana: {
    month: "July",
    day: 29,
  },
};
console.log(birthday.amelia.month);
console.log(birthday["amelia"]["month"]);

birthday["notsile"] = {};

birthday["notsile"]["month"] = "December";
console.log(birthday["notsile"]);
birthday["notsile"]["day"] = 13;
console.log(birthday["notsile"]);
console.log(birthday["notsile"]["day"]);

const phonebook = {
    "Lily": {
      mobile: "+16235554420",
      work: "+12445552374",
      home: "+19775552223"
    },
    "Tim's brother Kyle": {
      mobile: "+4235555616"
    }
  };
  
  
  function addPhoneNumber(name, numberType, number) {
    if(!phonebook[name]){
      phonebook[name] = {};
    }
    phonebook[name][numberType] = number
  }
  
  addPhoneNumber("Stephanie Noland", "mobile", "+4235555212");
  
  console.log(phonebook["Stephanie Noland"].mobile); 

  const yourNumber = "D138";
let windowNumber;

const windows = {
  "D133": 1,
  "D134": 2,
  "D135": 3,
  "D136": 4,
  "D137": 5
};

windowNumber = windows[yourNumber] || 0;

console.log(windowNumber); 

