const num = 5;

const myFunc = () => {
  const num = 10;
  console.log(num);
};

// const Rectangle = class {}; 
class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  area() {
    return this.length * this.width;
  }
}

const rectangle = new Rectangle(2, 2);
console.log(rectangle);
console.log(rectangle.area());

class Box extends Rectangle {
  constructor(length, width, height) {
    super(length, width);

    this.height = height;

    this.volume = this.volume.bind(this);
  }

  area() {
    console.log('which area() gets called?');
  }

  volume() {
    return this.area() * this.height;
  }
}

const box = new Box(3, 4, 5);
console.log(box);
console.log(box.volume());

const volume = box.volume;
volume();
