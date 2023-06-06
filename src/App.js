import { useState, useMemo } from 'react';
import './App.css';


function App() {

  const [show, setShow] = useState(false);

  const id = useMemo(() => {
    return Math.random() * 34
  }, []);

  return (
    <>
    <div className="app-container">

      <h1>Unique Number - {id}</h1>

      <button onClick={() => setShow((prev) => !prev)}>
        {show ? "Hide" : "Reveal"}
      </button>
      <p>{show ? "some api key" : "*********"}</p>
    </div>
    </>
  );
}

export default App;
