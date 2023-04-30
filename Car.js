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



function A() {
  return 123;
}

() => {
  return 123;
}