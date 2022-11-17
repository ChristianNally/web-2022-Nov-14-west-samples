const names = ['alice', 'bob', 'carol', 'dean', 'elise'];

// for (const name of names) {
//   console.log(`Hello ${name}, welcome to our website!`);
// }


const loopingArray = function(arr, callback) {
  for (const element of arr) {
    // console.log('element', element);
    callback(element);
  }
};

const whatToDoOnEachIteration = function(name) {
  console.log(`We got this ${name} from the higher order function`);
};

loopingArray(names, whatToDoOnEachIteration);
console.log();
names.forEach(whatToDoOnEachIteration);
// loopingArray([1, 2, 3]);

// for (const index in names) {
//   console.log(names[index]);
// }

// for (let i = 0; i < names.length; i += 2) {
//   console.log(names[i]);
// }

// console.log('i', i);
