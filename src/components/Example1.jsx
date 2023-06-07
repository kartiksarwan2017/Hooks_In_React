import React from "react";
import { useState, useMemo, useEffect } from 'react';

const Example1 = () => {
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
    <div>

      <h1 style={{margin: "40px 0"}}>Example 1</h1>
      <h1>Unique Number - {id}</h1>

      <button onClick={() => setShow((prev) => !prev)}>
        {show ? "Hide" : "Reveal"}
      </button>
      <p>{show ? "some api key" : "*********"}</p>
    </div>
    </>
  );
};

export default Example1;
