// Write a program that takes in an unlimited number of command line arguments and prints out the sum of them. 
// If any argument is not a whole number, skip it. Do not support negative numbers.


// get the inputs from process.argv
console.log('process.argv', process.argv);
const newArray = process.argv.slice(2);
console.log('newArray', newArray);

// loop over the inputs and add each of them to a total (sum)

let total = 0;

for (let value of newArray){
  console.log('value from "of" loop', value);
  console.log('type of value', typeof value);
  const addend = parseInt(value, 10);
  const number = Number(value);

  if (addend > 0  && addend === number){
    total = total + addend;
  }

}

// print out the total onto the terminal
console.log('total', total);