import './App.css';
import { useState } from 'react';
import Example1 from './components/Example1';
import Example2 from './components/Example2';
import Example3 from './components/Example3';
import Boi from "./components/Boi";

function App() {

  const [show, setShow] = useState(false);

  return ( 
    <>
    <div className="app-container">
      
      <h1>UseMemo() Hook Examples</h1>
      <Example1 />
      <Example2 />
      <Example3 />

      <h1 style={{margin: "40px 0"}}>UseCallback() Hook Examples</h1>
      <Boi />

      <button onClick={() => setShow((prev) => !prev)}>
        {show ? "Hide" : "Reveal"}
      </button>
      <p>{show ? "some api key" : "***********"}</p>

    </div>
    </>
  );
}

export default App;
