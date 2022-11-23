// A quick review of function definition syntax


// // traditional definition
// function doSomething(nameString){
//   let returnValue = '';
//   returnValue = nameString + " " + nameString;
//   return returnValue;
// }

// const anotherDoThing = function (nameString){
//   let returnValue = '';
//   returnValue = nameString + " " + nameString;
//   return returnValue;
// };

// const yetAnotherDoThing = (param1, param2) => {
//   const num = 5;
//   console.log('another line of code');
// };

// const yetAnotherAnotherFunctionDoingThings = (x,y) => x*y;

// // function execution, or 'calling' the function
// doSomething('hello');

// anotherDoThing('thisthisthis');

// yetAnotherDoThing('monkeyFuzz');


// function sleepFor(sleepDuration) {
//   const nowObject = new Date();
//   const now = nowObject.getTime();
//   while (new Date().getTime() < now + sleepDuration) {
//     /* do nothing */
//   }
// }

//                         'look', 500, getUp
const doAction = function(name, duration, next){
  console.log(`Starting ${name}`);
  setTimeout(() => {
    console.log(`Ending ${name}`);
    if (next !== null){
      next();
    }
  }, duration);
};


fs.fileRead('path/file.txt', 'utf8', (data) => {});

net.getDataFromConnection('http://example.com/data.json', (data) => {});


//
// look
//
const look = () => {
  doAction('look', 920, look);
};

//
// getUp
//
const getUp = () => {
  doAction('getUp', 1500, walk);
};

//
// walk
//
const walk = () => {
  doAction('walk', 3000, openTheDoor);
};

//
// openTheDoor
//
const openTheDoor = () => {
  doAction('openTheDoor', 2000, walkThroughTheDoor);
};

//
// walkThroughTheDoor
//
const walkThroughTheDoor = () => {
  doAction('walkThroughTheDoor', 4000, null);
};

look();
getUp();

console.log("This is the end of the main thread.");

// the event loop cannot start until the 
// main thread is finished.
