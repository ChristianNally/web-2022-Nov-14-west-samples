import './App.css';
import { useState } from 'react';
import Counter from './components/Counter';
import FetchData from './components/FetchData';

function App() {

  const [needCounter, setNeedCounter] = useState(false);

  return (
    <div className="App">
      <h1>Code Samples</h1>

      <label>
        <input type="checkbox"
          defaultChecked={needCounter}
          onChange={() => setNeedCounter(!needCounter)}
        />
        Check Me!
      </label>
      { needCounter && <Counter description="it counts" /> }
      { <FetchData /> }
    </div>
  );
}

export default App;
