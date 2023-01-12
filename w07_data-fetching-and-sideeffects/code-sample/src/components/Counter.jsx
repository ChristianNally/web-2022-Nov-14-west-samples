import { useState, useEffect } from 'react';

const Counter = (props) => {

  const [count, setCount] = useState(0);
  const [label, setLabel] = useState('MonkeyFuzz');
  
  useEffect( () => {
    document.title = `Count = ${count}`;
    console.log('I updated the document title.');
  }, [count] );

  // useEffect( () => {
  //   setInterval(()=>{console.log('I am alive!')}, 500);
  // } ); // with no dependency array, the useEffect callback will run on EVERY render

  useEffect( () => {
    const intervalReference = setInterval(()=>{console.log('I am alive!')}, 500);
    return () => {
      clearInterval(intervalReference);
    };
  }, [] ); // with an EMPTY dependency array, the useEffect callback will run once after the first render

  return (
    <>
      <h1>{ props.description }</h1>
      <h3>Counter: { count }</h3>
      <button onClick={() => {setCount(count + 1)}}>Click Me</button>
      <br/><label>{label}</label>
      <input 
        value={label}
        onChange={(e) => {setLabel(e.target.value)}}
      />
    </>
  );
};

export default Counter;