// added in 2015 with ES6
// advantages
// 1. no function keyword needed
// 2. if only one argument, no parens needed
// 3. if only one line of code, no curly braces needed
// 4. if no curly braces, the line of code is implicitly returned
// 5. arrow funcs do not create `this`

const myFunc1 = () => {}
const myFunc2 = name => console.log('hello');

// function sayHello() {}
// sayHello() => {};

const sayHello1 = function(name) {
  return `hello there ${name}`;
};

const sayHello2 = name => `hello there ${name}`;

const returnVal = sayHello2('alice');
console.log('returnVal', returnVal);
