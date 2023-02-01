interface Dog {
  name: string;
  worms: boolean;

  feedDog: (foodType: string) => boolean;
}

const myDog: Dog = {
  name: 'Clifford',
  worms: false,
  feedDog: (foodType: string) => {
    return true;
  }
};