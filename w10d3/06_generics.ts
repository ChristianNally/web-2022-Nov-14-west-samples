interface Container<T, S> {
  name: string;
  contents: T;
  arr?: S[];
}

const stringContainer: Container<string, string> = {
  name: 'string container',
  contents: 'hello'
};

const numberContainer: Container<number, boolean> = {
  name: 'number container',
  contents: 42
};
