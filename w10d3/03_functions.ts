// params/args, return value, name


// const sayHello = (name: string, age?: number): string => {
//   return `hello there ${name}`;
// };

const returnVal1 = sayHello('alice');
const returnVal2 = sayHello('alice', 42);

const funcReturningPromise = (arg: number): Promise<number> => {
  return new Promise((resolve) => {
    resolve(arg);
  });
};

funcReturningPromise(42)
  .then((data) => {});

// const higherOrderFunc = (callback: (name: string) => void): boolean => {
//   callback('alice');
//   return false;
// };
