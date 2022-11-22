// naming things is hard

// const username = 'alice';
// console.log(username);

// console.log('bob');
// sayHello('carol');

const runMyFunc = function(anotherFunc) {
  anotherFunc('Carol');
};

// anotherFunc();

const sayHello = function(name) {
  console.log(`hello there ${name}`);
};

runMyFunc(function(name) {
  console.log(`hello there ${name}`);
});

runMyFunc(sayHello);



