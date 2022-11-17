const names = ['alice', 'bob', 'carol', 'dean', 'elise'];

const ourMap = (arr, callback) => {
  // create the output array
  const output = [];

  // loop through the provided array
  for (const element of arr) {
    // call the provided callback with each element AND capture the return value
    const returnVal = callback(element);

    // add the returnVal to the output array
    output.push(returnVal);

    // output.push(callback(element));
  }

  // return the output array
  return output;
};

const doOnEachLoop = (name) => {
  return `hello there ${name}`;
};

const outputArray = ourMap(names, doOnEachLoop);
console.log('names', names);
console.log('outputArray', outputArray);

console.log();

const outputArray2 = names.map(doOnEachLoop);
console.log('built-in map', outputArray2);
