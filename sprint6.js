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
  Lily: {
    mobile: "+16235554420",
    work: "+12445552374",
    home: "+19775552223",
  },
  "Tim's brother Kyle": {
    mobile: "+4235555616",
  },
};

function addPhoneNumber(name, numberType, number) {
  if (!phonebook[name]) {
    phonebook[name] = {};
  }
  phonebook[name][numberType] = number;
}

addPhoneNumber("Stephanie Noland", "mobile", "+4235555212");

console.log(phonebook["Stephanie Noland"].mobile);

const yourNumber = "D138";
let windowNumber;

const windows = {
  D133: 1,
  D134: 2,
  D135: 3,
  D136: 4,
  D137: 5,
};

windowNumber = windows[yourNumber] || 0;

console.log(windowNumber);

const heights = {
  burjKhalifa: 828,
  tokyoSkyTree: 634,
  shanghaiTower: 632,
  abrajAlBait: 601,
  cantonTower: 600,
  pingAnFinanceCentre: 600,
  lotteWorldTower: 555,
  cnTower: 553,
  oneWorldTradeCenter: 541,
  ostankinoTower: 540,
};

const stratosphere = 11000;

const sumHeights = Object.values(heights).reduce(function (result, current) {
  return result + current;
}, 0);

console.log(sumHeights >= stratosphere);

const tion = {
  fruition: "the realization or fulfilment of a plan or project",
  depreciation: "the process of losing value",
  microseismicity: "a faint earth tremor caused by natural phenomena",
  alienation: "a conveyance of property",
  bifurcation:
    "the point or area at which something divides into two branches or parts",
  locomotion: "the ability to move",
  fusion: "a union by or as if by melting",
};

Object.keys(tion).forEach(function (key) {
  if (!key.endsWith("tion")) {
    delete tion[key];
  }
});

console.log(tion);

function swap(obj) {
  const res = {};
  // swap keys with values and add them to the res object

  return res;
}

const myObj = {
  first: 1,
  second: 2,
  third: 3,
};

function swap(obj) {
  const res = {};

  Object.keys(obj).forEach(function (key) {
    res[obj[key]] = key;
  });

  return res;
}

console.log(myObj);
console.log(swap(myObj));

function copy(obj) {
  const res = {};
  Object.keys(obj).forEach(function (key) {
    res[key] = obj[key];
  });
  return res;
}

const firstObj = {
  one: 1,
  two: 2,
  three: 3,
};

const secondObj = firstObj;
const thirdObj = copy(firstObj);

console.log(firstObj);
console.log(secondObj);
console.log(thirdObj);

firstObj.four = 4;

console.log(firstObj);
console.log(secondObj);

console.log(thirdObj);

function compare(firstObj, secondObj) {
  return firstObj === secondObj;
}

const first = {
  property: "value",
};

const second = {
  property: "value",
};

const third = second;

console.log(compare(first, second));
console.log(compare(second, third));

function isEqual(firstObj, secondObj) {
  const firstKey = Object.keys(firstObj);
  const secondKey = Object.keys(secondObj);
  if (firstKey.length !== secondKey.length) {
    return false;
  }
  return firstKey.every(function (key) {
    return firstObj[key] === secondObj[key];
  });
}

const first1 = {
  property: "value",
  anotherProperty: "another value",
};

const second1 = {
  property: "value",
  anotherProperty: "another value",
};

const third1 = {
  property: "value",
  anotherProperty: "yet another value",
};

isEqual(first1, second1);
isEqual(second, third1);

function shallowCopy(obj) {
  return Object.assign({}, obj);
}

const myObj1 = {
  one: 1,
  two: 2,
  three: 3,
};

const myObjCopy = shallowCopy(myObj1);

console.log(myObjCopy === myObj1);

// modify this function
function evolution(obj, key, value) {
  const newObject = Object.assign({}, obj);
  newObject[key] = value;
  return newObject;
}

const fish = {
  eggs: "roe",
  eyes: 2,
  habitat: "water",
};

const frog = evolution(fish, "legs", 4);

console.log("frog: ", frog);

console.log("fish: ", fish);

const aladdinSane = {
  artist: "David Bowie",
  album: "Aladdin Sane",
  year: 1973,
  tracks: {
    "Watch That Man": "4:30",
    "Aladdin Sane": "5:06",
    "Drive-In Saturday": "4:33",
    "Panic in Detroit": "4:25",
    "Cracked Actor": "3:01",
    Time: "5:15",
    "The Prettiest Star": "3:31",
    "Let's Spend the Night Together": "3:10",
    "The Jean Genie": "4:07",
    "Lady Grinning Soul": "3:54",
  },
};

const aladdinSaneCopy = Object.assign({}, aladdinSane, {
  tracks: Object.assign({}, aladdinSane.tracks),
});

console.log(aladdinSane.tracks === aladdinSaneCopy.tracks);

function double(value) {
  if (Array.isArray(value)) {
    return value.map(function (num) {
      return num * 2;
    });
  }

  return value * 2;
}

double(2);
double([1, 2, 3]);

const coverHeading = document.querySelector(".cover__heading");
const playListTitles = [
  "Classic Elevator Music - Volume IV",
  "Songs to knit to",
  "My favorite bagpipe songs",
];

function getRandomElement(arr) {
  const randomId = Math.floor(Math.random() * arr.length);
  return arr[randomId];
}

coverHeading.addEventListener("dblclick", function () {
  coverHeading.textContent = getRandomElement(playListTitles);
});

function showmessage() {
  console.log("We've declared the function beforehand, we'll use it later");
}

someElement.addEventListener("click", showmessage);
someElement.removeEventListener("click", showmessage);

const link = document.querySelector(".link");

link.addEventListener("click", function (evt) {
  evt.preventDefault();

  console.log("The link isn't working anymore");
});

const songLikes = document.querySelectorAll(".song__like");

songLikes.forEach((songLike) => {
  songLike.addEventListener("click", function (evt) {
    like(evt.target);
  });
});

document.querySelector("#parent").addEventListener("click", onClick);

function onClick(evt) {
  document.querySelectorAll(".green").forEach((item) => {
    item.classList.remove("green");
  });
  evt.currentTarget.classList.toggle("green");
}

const form = document.forms.myForm;

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
});

const form1 = document.forms.form1;
const form2 = document.forms.form2;

form1.elements.google;
form2.elements.answer;
form2.elements.earth;

const button = document.querySelector(".button");

const input = form.elements.myInput;
const textArea = form.elements.myTextArea;

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log(input.value);
  console.log(textArea.value);
});

const button1 = document.querySelector(".button");

const checkbox = document.forms.myForm.myCheckbox;

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log(checkbox.checked);
});

const checkbox1 = document.querySelector("input[type=checkbox]");

function callback(evt) {
  console.log(`The ${evt.type} event has occured`);
}

checkbox1.addEventListener("input", callback);

checkbox1.addEventListener("change", callback);

const form3 = document.forms.myForm;

form.addEventListener("submit", function (evt) {
  evt.preventDefault();

  form3.reset();
});

const form4 = document.forms.myForm;
const input2 = form4.elements.myInput;

form4.addEventListener("input", function (evt) {
  if (input2.length === 4) {
    form4.submit();
  }
});

form4.addEventListener("submit", function (evt) {});

// const formElement = document.querySelector(".form");
// const formInput = formElement.querySelector(".form__input");

// formElement.addEventListener("submit", function (evt) {
//   evt.preventDefault();
// });

formInput.addEventListener("input", function (evt) {
  console.log(evt.target.validity.valid);
});

const formElement = document.querySelector(".form");
const formInput = formElement.querySelector(".form__input");

const showInputError = (element) => {
  element.classList.add("form__input_type_error");
};

const hideInputError = (element) => {
  element.classList.remove("form__input_type_error");
};

const checkInputValidity = () => {
  if (!formInput.validity.valid) {
    showInputError(formInput);
  } else {
    hideInputError(formInput);
  }
};

formElement.addEventListener("submit", function (evt) {
  evt.preventDefault();
});

formInput.addEventListener("input", checkInputValidity);

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".form__input"));

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".form"));

  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    setEventListeners(formElement);
  });
};

enableValidation();
