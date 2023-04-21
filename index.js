const a= {
name:"hanna123",
address:"mt",
address2:"mt2",
address3:"mt3"

}
console.log(a.name);
// i added 1 million code lines
console.log(a.address);

let age = 10
function checkAge(){
    if(age>20){
        console.log("age is greater than 20");
    }else if(age==20){
        console.log("age is 20");
    }else{
        console.log("age is less than 20");
    }
}

let checking = checkAge();
console.log(checking);

for(var i=2; i<=9; i++){
    for(var j=1; j<=9; j++){
        console.log(i+"*"+j+"="+i*j);
    }
}

let box = "";
for(var i=2; i<=9; i++){
    for(var j=1; j<=9; j++){
        box += i+"*"+j+"="+i*j+"\t";
    }
    box +="\n";
}
console.log(box);

const numbers = [23,45,64,4];
const newArr = numbers.map(myFunction);
console.log(newArr);
function myFunction(num) {
    return num * 10;
}

var officers = [
    { id: 20, name: 'Captain Piett' },
    { id: 24, name: 'General Veers' },
    { id: 56, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
  ];

  const officerIds = officers.map(officer =>officer.id);
  console.log(officerIds);

  let nums = [424,322,53];
  let subt = nums.reduce(myFunc);
  console.log(subt);

  function myFunc(total,nu){
    return total-nu;
  }

  var pilots = [
    {
      id: 10,
      name: "Poe Dameron",
      years: 14,
    },
    {
      id: 2,
      name: "Temmin 'Snap' Wexley",
      years: 30,
    },
    {
      id: 41,
      name: "Tallissan Lintra",
      years: 16,
    },
    {
      id: 99,
      name: "Ello Asty",
      years: 22,
    }
  ];

  const totalYears = pilots.reduce((acc, pilot) => acc + pilot.years, 0);
  console.log(totalYears);

  var pilots = [
    {
      id: 2,
      name: "Wedge Antilles",
      faction: "Rebels",
    },
    {
      id: 8,
      name: "Ciena Ree",
      faction: "Empire",
    },
    {
      id: 40,
      name: "Iden Versio",
      faction: "Empire",
    },
    {
      id: 66,
      name: "Thane Kyrell",
      faction: "Rebels",
    }
  ];

  const rebels = pilots.filter(pilot=>pilot.faction==="Rebels");
  const empire = pilots.filter(pilot=>pilot.faction==="Empire");

  console.log(rebels);
  console.log(empire);

  let name = 'samsung store'

class TV{
    name='';
    price=0;
    size=''
    constructor(name,price,size){
        this.name=name
        this.price=price
        this.size=size
    }
}

let tv1 = new TV('noona tv',200,'56inch');
let tv2 = new TV('ultra tv',200,'27inch');  

console.log(tv1);
console.log(tv2);

for(i=2; i<=9; i++){
  for(j=1; j<=9; j++){
    console.log(i+"*"+j+"="+i*j);
  }
}

for(i=2; i<=9; i++){
  for(j=1; j<=9; j++){
    if(i !==3){
    console.log(i+"*"+j+"="+i*j)};
  }
}

for(i=2; i<=9; i++){
  for(j=1; j<=9; j++){
    if(i %2==0){
    console.log(i+"*"+j+"="+i*j)};
  }
}

for(i=2; i<=9; i++){
  for(j=1; j<=9; j++){
    if(i %2!==0){
    console.log(i+"*"+j+"="+i*j)};
  }
}

class House {
  constructor(color){
    this.color = color
  }
  getFurniture(){
    return 'sofa'
  }
}
  let houseObject = new House('red')
  let houseObject2 = new House('blue')

  console.log(houseObject.color)
  console.log(houseObject.getFurniture())

  console.log(houseObject2.color)
  console.log(houseObject2.getFurniture())

  for(var i=2; i<=9; i++){
    for(var j=1; j<=9; j++){
      console.log(i + "*" + j + "=" + i*j)
    }
  }

 for(var i=2; i<=9; i++){
  for(var j=1; j<=9; j++){
    if(i !==8){
      console.log(i + "*" + j + "=" + i*j);
    }
  }
 }

 for(var i=0; i<=100; i++){
  console.log(i);
 }

 for(var i=20; i<=20; i++){
  for(var j=1; j<=9; j++){
    console.log(i + "*" + j + "=" + i*j);
  }
 }

 for(var i=2; i<=100; i++){
   for(var j=1; j<=9; j++){
    if(i%2==0){
    console.log(i+"*"+j+"="+i*j)
    }
   }
 }

 for(var i=2; i<=100; i++){
  for(var j=1; j<=9; j++){
    if(i %2 !==0){
      console.log(i+"*"+j+"="+i*j);
    }
  }
 }

 let container='';
 for(var i=2; i<=100; i++){
  for(var j=1; j<=9; j++){
    box +=i+"*"+j+"="+i*j;
  }
  
 }
 console.log(container);

 var foods =[
  {number:1,name:"apple"},
  {number:2,name:"grape"},
  {number:3,name:"orange"},
 ];

 const foodNumber = foods.map(food => food.number);
 console.log(foodNumber);

 var books =[
  {number:1, type:"fiction"},
  {number:2, type:"education"},
  {number:3, type:"science"},
 ];

 const booksNumber = books.map(book => book.number);
 console.log(booksNumber);

 var schools =[
  {type:1, location:"queens"},
  {type:2, location:"manhattan"},
  {type:3, location:"bayside"},
 ];

 const schoolsLocation =schools.map(school =>school.location);
 console.log(schoolsLocation);

 let messages = ["javascript", "is", "fun"];
const jointString = messages.reduce((acc, message) => acc + message, "");
console.log(jointString);

function Person(name,age,gender){
  this.name = name;
  this.age=age;
  this.gender=gender;

  this.introduce = function(){
    console.log("Hi My name is "+this.name+" I am "+this.age+" years old. ");
  }
}
var person1 = new Person("Alice", 25, "Female");
person1.introduce();

class Animal1 {
  constructor(name){
    this.name = name;
  }
  speak(){
    console.log(this.name+" makes a noise");
  }

}

class Dog extends Animal1{
  speak(){
    console.log(this.name + " barks.")
  }
}

var dog1 = new Dog("Buddy");
console.log(dog1.name);
dog1.speak();

let myNumbers =[1,2,3,4,5];
let doublenumbers =myNumbers.map(number =>number*2);

console.log(doublenumbers);

let myNumb =[1,2,3,4,5];
let sum = myNumb.reduce((accumulator,currentValue)=>accumulator+currentValue,0);
console.log(sum);

let myNum=[1,2,3,4,5];
let evenNumbers = myNum.filter(number =>number%2===0);
console.log(evenNumbers);

for(i=2; i<10; i++){
  for(j=1; j<10; j++){
    console.log(i + "*" + j + "=" + i*j);
  } 
}


 
 

  
  


