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
  