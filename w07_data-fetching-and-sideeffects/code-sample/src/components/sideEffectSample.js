//

let xx = 3;

function doSomething(num){

  num = num + xx;

  for (let ii = 0; ii < num; ii++){
    // do something
    console.log('something'); // <---- this is a side effect
  }

  return num;
}


doSomething(7);

doSomething(7);

//
//
//

xx++;


doSomething(7);
