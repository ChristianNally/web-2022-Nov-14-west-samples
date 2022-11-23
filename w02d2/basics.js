function sleepFor(sleepDuration) {
  const nowObject = new Date();
  const now = nowObject.getTime();
  while (new Date().getTime() < now + sleepDuration) {
    /* do nothing */
  }
}

function doAThingFiveTimes(thing){
  for (let key = 0; key < 5; key++){
    thing();
  }
}


doAThingFiveTimes( () => {
  console.log('MonkeyFuzz!');
} );

const thingy = () => {
  console.log('Hello, World!');
};

doAThingFiveTimes(thingy);


doAThingFiveTimes( () => {
  setTimeout(() => {
    console.log('Apple Donuts!');
  }, 500);
} );


// multiplyByTen(45 - 3);

// const gravity = 43;
// multiplyByTen(gravity);


sleepFor(10000);
console.log('end of main thread');
