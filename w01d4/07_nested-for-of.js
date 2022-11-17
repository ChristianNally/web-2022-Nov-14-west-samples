const myObj = {
  nestedArrays: [
    ['a', 'b', 'c'],
    [1, 2, 3]
  ]
};

console.log(myObj);

// const nestedArrays = myObj.nestedArrays;

for (const subArray of myObj.nestedArrays) {
  console.log('subArray', subArray);
  for (const subElement of subArray) {
    console.log('subElement', subElement);
  }
}

