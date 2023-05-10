class Car {
  constructor(name123123, year, mileage) {
    this.name = name123123;
    this.year = year;
    this.mileage = mileage;
  }
}

const myCar1 = new Car("Ford", 2014, 10000);
const myCar2 = new Car("Audi", 2019, 200000);
const myCar3 = new Car("Audi3", 2012, 200001);
const myCar4 = new Car("Audi4", 2013, 200002);
const myCar5 = new Car("Audi5", 2014, 200003);
const myCar6 = new Car("Audi6", 2015, 200040);
const objectList = [myCar1, myCar2, myCar3, myCar4, myCar5, myCar6]

const objectMap = objectList.map((element) => {
  return element;
})

console.log(objectMap)



let numbs = [1,2,3,4,5];
let doublenumbs = numbs.map((numb) => {
  return numb *2;
});
console.log(doublenumbs);

const products = [
  { name: "Apple", category: "Fruit", price: 1.5 },
  { name: "Carrot", category: "Vegetable", price: 0.75 },
  { name: "Orange", category: "Fruit", price: 2.0 },
  { name: "Broccoli", category: "Vegetable", price: 1.25 }
];

const expensiveProducts = products.filter((product) =>{
return product.price > 1.0;
}) 
  

console.log(expensiveProducts);