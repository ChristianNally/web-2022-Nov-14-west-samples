import {useState, useEffect} from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  // useEffect(() => {
  //   // setCounter(counter + 1);
  //   setCounter((prev) => prev + 1);
  // }, []);

  useEffect(() => { 
    console.log('setting the document title');
    document.title = `The counter is ${counter}`;

    if (counter > 20) {
      alert('please input your cc number');
    }
  }, [counter]);

  useEffect(() => {
    console.log('setting the interval');
    const interval = setInterval(() => {
      console.log(`the value of counter is ${counter}`);
    }, 3000);

    const cleanup = () => {
      console.log('clearing the interval');
      clearInterval(interval);
    };

    return cleanup;
  }, [counter]);

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Increment!</button>

      <div>
        <label>Search term:</label>
        <input 
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <h2>Term: {searchTerm}</h2>
      </div>
    </div>
  );
};

export default Counter;
