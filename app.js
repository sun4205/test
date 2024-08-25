//callback practice
const jobTitles = [
  "Wizard of Light Bulb Moments",
  "Ghost Hunter",
  "Champagne Tester",
  "Legal Bank Robber",
];
jobTitles.forEach(function (item) {
  console.log(item);
});

const counter = ["Emperor", "King", "Caesar", "Pharaoh", "Sultan", "Tsar"];

const counterIndexed = counter.map(function (person, index) {
  return `${index + 1}.${person}`;
});

console.log(counterIndexed);

const kings = [
  "Louis I the Fair",
  "Louis II the Stammerer",
  "Louis III",
  "Louis IV Transmarinus",
  "Louis V the Do-Nothing",
];

const kingsIndexed = kings.map(function (item, index, array) {
  const currentIndex = `(${index + 1} of ${array.length})`;
  return `${item} ${currentIndex}`;
});

console.log(kingsIndexed);

//sorting an array

const myNumbers = [0, 3.14, 2.718, 13];
myNumbers.sort(function (a, b) {
  return a - b;
});

console.log(myNumbers);

const diseases = ["Mysophobia", "Fear of missing out", "Erythrophobia"];

diseases.sort(function (a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();

  if (a < b) return -1;
  if (a > b) return 1;

  return 0;
});

console.log(diseases);

//functions are values

const multiply = function (a, b) {
  return a * b;
};
multiply(2, 3);

const result = [1, 2, 3].reduce(multiply);
console.log(result);

function createFunction() {
  function simpleFunction() {
    console.log("hello world");
  }
  return simpleFunction;
}
const newFunction = createFunction();
newFunction();

//arrow function

const shorterSingleAnecdote = (joke) => `I know only one jokes:${jokes}`;
const colorHex = () => ({ white: "#FFF" });

const array = [1, 2, 3, 4];
const newArray = array.map((ele) => ele * 2);

//Default parameters

function generateName(firstName, lastName, middleName = "") {
  return `${firstName} ${middleName} ${lastName} `;
}

generateName("jane", "Doe");

//forEach() practice

const how = ["harder", "better", "faster", "stronger"];

how.forEach(function (item) {
  console.log(item + ".");
});

const how2 = ["harder", "better", "faster", "stronger"];

for (let i = 0; i < how.length; i += 1) {
  console.log(how[i] + ".");
}

const people = [
  "Steven Spielberg",
  "Michael Bay",
  "Robin Spielberg",
  "Sasha Rebecca Spielberg",
  "James Cameron",
];

const Spielberg = [];

people.forEach(function (element) {
  if (element.includes("Spielberg")) {
    Spielberg.push(element);
  }
});

console.log(Spielberg);

const greekAlphabet = "αβγδεζηθικλμνξοπρστυφχψω";
console.log(greekAlphabet.length);

const wrongWord = "expresso";
console.log(wrongWord[1]);

const password = "qwerty";

if (password.length < 8) {
  console.log("You call this a strong password?");
}

const acrostic = [
  "Give me your patience, sister, while I frame",
  "Exact in capitals your golden name;",
  "Or sue the fair Apollo and he will",
  "Rouse from his heavy slumber and instill",
  "Great love in me for thee and Poesy.",
  "Imagine not that greatest mastery",
  "And kingdom over all the Realms of verse,",
  "Nears more to heaven in aught, than when we nurse",
  "And surety give to love and Brotherhood.",
  " ",
  "Anthropophagi in Othello's mood;",
  "Ulysses storm'd and his enchanted belt",
  "Glow with the Muse, but they are never felt",
  "Unbosom'd so and so eternal made,",
  "Such tender incense in their laurel shade",
  "To all the regent sisters of the Nine",
  "As this poor offering to you, sister mine.",
  " ",
  "Kind sister! aye, this third name says you are;",
  "Enchanted has it been the Lord knows where;",
  "And may it taste to you like good old wine,",
  "Take you to real happiness and give",
  "Sons, daughters and a home like honied hive.",
];

let georgianaAugustaKeats = "";

for (let i = 0; i < acrostic.length; i += 1) {
  georgianaAugustaKeats += acrostic[i][0];
}
console.log(georgianaAugustaKeats);

console.log("Triple Peaks".indexOf("T"));
console.log("espresso".indexOf("s"));
console.log("espresso".indexOf("x"));
const elements = "Earth, Air, Fire, Water";
console.log(elements.indexOf("Fire"));
console.log(
  "Harry Potter and the Prisoner of Azkaban".includes("Harry Potter")
);
console.log("Teamwork".includes("I"));
console.log("Vendetta".startsWith("V"));
console.log("The perfect date".startsWith("Dinner and a movie"));

const theRealEnd = "This is not the end";
console.log(theRealEnd.endsWith("end"));
let message = "I'm tired. I should of grabbed an expresso before this lesson.";

if (message.includes("of")) {
  console.log("sigh, mutter");
}

if (message.includes("ex")) {
  console.log("eye roll");
}

console.log("Turn Caps Lock on".toLowerCase());
console.log("Turn Caps Lock off".toUpperCase());

const firstStr = "This verification won't work"; 
const secondStr = "thIS vEriFicaTIon won't work";
console.log(firstStr === secondStr); 
console.log(firstStr.toLowerCase() === secondStr.toLowerCase());

console.log("I came. I saw. I conquered.".split(" "));
console.log("I came. I saw. I conquered.".split(". "));
console.log("Believe".slice(2, 5));
console.log("Google Maps".slice(7));

//const myName = prompt("What's your name?", "");

//console.log("Hello, " + myName[0].toUpperCase() + myName.slice(1));

const fourElements = "Earth, Air, Fire, Water";
const elementsArray = fourElements.split(", ");

console.log(elementsArray);

console.log(Math.floor(9.99));
console.log(Math.ceil(9.01));
console.log(Math.round(9.51));
console.log(Math.max(1,2,3,4,5));
console.log(Math.min(1,2,3,4,5));
console.log(Math.random());

let overtime = "17 hours, 59 minutes, and 59 seconds";

console.log(parseInt(overtime));
console.log(parseInt("99 Red Balloons"));
console.log(parseInt("Catch 22"));
console.log(parseFloat('98.6'));