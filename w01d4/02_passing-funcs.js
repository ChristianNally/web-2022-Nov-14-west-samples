const runMyFunc = function(anotherFunc) {
  // console.log(anotherFunc); // console.log(sayHello)
  anotherFunc('Carol'); // console.log('Carol')
  // console.log();
  // sayHello();
};

const sayHello = function(name) {
  console.log(`hello there ${name}`);
};

const addTwo = function(num) {
  console.log(num + 2);
};

runMyFunc(sayHello);
runMyFunc(addTwo);
runMyFunc(console.log);

console.log;
// runMyFunc(sayHello());

