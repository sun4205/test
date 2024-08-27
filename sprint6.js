const house = { 
    bedrooms:3 ,
    heat:"gas",
    hasBasement:true
   };

   const keretHouse = {
    bedrooms: 1,
    heat: "gas",
    hasBasement: false,
    architect: {
      name:"Jakub Szczęsny",
      homeCountry:"Poland",
      yearOfBirth:1973
    }
  };
  const obj = {
    one: 1,
    two: 2,
    three: 3
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
  dish1: dish1
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
  getCartoonName
};

//const cartoon = { human, dog, princess, getCartoonName };

const welcomeMessages = { 
    english: "Welcome",
    french: "Bienvenue",
    italian: "Benvenuto",
    spanish: "bienvenido",
    russian: "Добро пожаловать",
    chinese: "歡迎",
    finnish: "Tervetuloa"
  };
  
  console.log(welcomeMessages.finnish);