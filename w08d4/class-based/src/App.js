import {useState} from 'react';

import './App.css';
import ClassBased from './components/ClassBased';
import Lifecycle from './components/Lifecycle';

const App = () => {
  const [showLifecycle, setShowLifecycle] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setShowLifecycle(!showLifecycle)}>Toggle showLifecycle</button>
      {/* <h2>W8D4 - Class-based Components</h2> */}
      {/* <ClassBased myProp={ "hello" }/> */}

      { showLifecycle && <Lifecycle /> }
      { !showLifecycle && <ClassBased /> }
    </div>
  );
};

export default App;
