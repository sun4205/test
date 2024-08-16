//callback practice
const jobTitles = [
	"Wizard of Light Bulb Moments",
    "Ghost Hunter",
    "Champagne Tester",
    "Legal Bank Robber"
];
jobTitles.forEach(function(item){
	console.log(item);
})

const counter = [
	"Emperor",
    "King",
    "Caesar",
    "Pharaoh",
    "Sultan",
    "Tsar"
]

const counterIndexed = counter.map(function(person,index){
	return `${index + 1}.${person}`;
})

console.log(counterIndexed);

const kings = [
    "Louis I the Fair",
    "Louis II the Stammerer",
    "Louis III",
    "Louis IV Transmarinus",
    "Louis V the Do-Nothing"
];

const kingsIndexed = kings.map(function(item,index,array){
	const currentIndex = `(${(index+1)} of ${array.length})`;
	return `${item} ${currentIndex}`;
})

console.log(kingsIndexed)

//sorting an array

const myNumbers = [0, 3.14, 2.718, 13];
myNumbers.sort(function(a,b){
	return a - b;
})

console.log(myNumbers);

const diseases = [
    "Mysophobia",
    "Fear of missing out",
    "Erythrophobia"
];

diseases.sort(function(a,b){
	a = a.toLowerCase();
	b = b.toLowerCase();

	if(a<b) return -1;
	if(a>b) return 1;

	return 0;
})

console.log(diseases);

//functions are values

const multiply = function(a,b){
    return a * b;
}
multiply(2,3);

const result = [1,2,3].reduce(multiply);
console.log(result);

function createFunction(){
    function simpleFunction(){
        console.log("hello world")
    }
    return simpleFunction
}
const newFunction = createFunction();
newFunction();

//arrow function

const shorterSingleAnecdote = (joke) => `I know only one jokes:${jokes}`;
const colorHex = () => ({white:"#FFF"});

const array = [1,2,3,4];
const newArray = array.map(ele => ele * 2);

//Default parameters

function generateName(firstName, lastName, middleName = ""){
    return `${firstName} ${middleName} ${lastName} `;
}

generateName('jane','Doe');