import { useState, useMemo } from "react";
import React from 'react';


const generateID = () => {
    return "dsads";
}


const Example2 = () => {

    const [show, setShow] = useState(false);
    const [val, setVal] = useState("");

    const randomId = generateID();

  return (
    <>
     <div>
        <h1 style={{margin: "40px 0"}}>Example 2</h1>
        <h1 
          style={{
            fontWeight: "100",
            letterSpacing: 2
          }}>
            #{randomId}
        </h1>

        <input 
          type={"text"}
          value={val}
          onChange={(e) => setVal(e.target.value)}
          placeholder={"Text..."}
          />

        <button onClick={() => setShow((prev) => !prev)}>
            {show ? "Hide" : "Reveal"}
        </button>  

        <p>{show ? "some api key" : "***********"}</p>

     </div>
    </>
  )
}

export default Example2;