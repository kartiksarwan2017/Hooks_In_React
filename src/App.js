import { useState } from 'react';
import './App.css';


function App() {

  const [show, setShow] = useState(false);

  return (
    <>
    <div className="app-container">
      <button onClick={() => setShow((prev) => !prev)}>
        {show ? "Hide" : "Reveal"}
      </button>
      <p>{show ? "some api key" : "*********"}</p>
    </div>
    </>
  );
}

export default App;
