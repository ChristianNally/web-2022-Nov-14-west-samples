console.log('Hi! 👋');

// DATA TYPES
// Primitive / Inmutable values
const string = 'Hello!';
const number = 10;
const boolean = true;
const undef = undefined;
const nul = null;

// Mutable values
const array = [1, 2, 4];
const objects = { color: 'blue' };

// OBJECTS
// object = { key: value }
const user = {
  firstName: 'Pedro',
  lastName: 'González'
};

// dot notation
console.log('dot notation', user.firstName);

// bracket notation
console.log('brackets notation', user['firstName']);

const lastName = 'firstName';
console.log('29', user.lastName);
console.log('30', user[lastName]);

// arrays: we access to its values by a position index
const numbersArray = [1, 2, 3, 4];
console.log(numbersArray[1]); //2

// bonus! adding extra items to an array by its position with brackets notation
numbersArray[100] = 'im at position 100!';
numbersArray[50] = [1, 2, 3];
console.log(numbersArray.length);
console.log(numbersArray);

// objects: we access to its values by a key property
const numbersObject = { 1: 10, 2: 20, 3: 30 };

//accesing nested objects in an object
const mixObject = {
  1: 10,
  2: 20,
  3: 30,
  4: 40,
  myKey: 'red',
  otherKey: 30,
  100: {
    details: {
      color: 'red',
      name: 'Ferrari'
    }
  }
};

// we cannot use dot notation for numbers as keys
console.log(mixObject[1]);
console.log(mixObject['myKey']);

// we can use a mix of dot notation or brackets to access nested objects
console.log(mixObject[100]['details']['name']);
console.log(mixObject[100].details.name);

// bonus! adding extra key/value pairs by using dot or brackets notation
mixObject.title = 'My amazing title!';
mixObject['description'] = 'This is my awesome and super cool title!';

mixObject[100].details.engine = 'V12';

console.log(mixObject);

// PASSING OBJECTS AS ARGUMENTS IN FUNCTIONS
const carObject = {
  name: 'Ferrari',
  color: 'red'
};
console.log(carObject);

// Mutating an internal property
const paintCar = function(car) {
  car.color = 'blue';
};
paintCar(carObject);
console.log(carObject);

// Reassigning a full object
const changeCar = function(car) {
  car = {};
  console.log('inside changeCar!', car);
  return car;
};

changeCar(carObject);
console.log(carObject);

// adding extra properties within the object
const addSpeakers = function(car) {
  car.speakers = 'boom boOoOom!! 🔊';
};

addSpeakers(carObject);
console.log(carObject);

// FUNCTIONS INSIDE OBJECTS
// object {
//  key1: value1,
//  key2: value2,
//  method1(),
//  method2()
// }

const cat = {
  name: 'Garfield',
  color: 'orange',
  getFood: function() {
    console.log('Give me foood! 🍝');
  }
};

cat.getFood();

const person = {
  firstName: 'Nikko',
  lastName: 'Bansil',
  sayFullName: function() {
    console.log(`${this.firstName} ${this.lastName}`);
    console.log(this);
  }
};

person.sayFullName();

// ITERATE THROUGH OBJECT KEY/VALUES
const fruit = {
  name: 'apple',
  color: 'green',
  emoji: '🍏'
};

// FOR OF
const fruitKeys = Object.keys(fruit);
console.log(fruitKeys);

for (const key of fruitKeys) {
  console.log(fruit[key]);
}

// FOR IN
for (const key in fruit) {
  console.log(fruit[key]);
}

// IN JS EVERYTHING IS INTERNALLY AN OBJECT! 🤯
const myString = 'hello!';
console.log(myString.__proto__);
