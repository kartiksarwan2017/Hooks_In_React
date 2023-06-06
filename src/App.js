import { useState, useMemo, useEffect } from 'react';
import './App.css';


function App() {

  /* Here in this case upon clicking the button the the value of state variable show gets changed and as the value of state variable gets changed the component App gets rerendered which also changes the value of id. id is the variable which generated random values between 0 to 34.
  
  In order to prevent change in the value of id when there is change in value of state variable show we use useMemo() Hook */
  const [show, setShow] = useState(false);
  // const [id, setId] = useState("");
  
  const id = useMemo(() => {
    return Math.random() * 34;
  }, []);

  // useEffect(() => {
  //   setId(Math.random() * 34);
  // }, []);

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
