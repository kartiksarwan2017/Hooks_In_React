import { useState, useMemo } from "react";
import React from 'react';


const generateID = () => {

    const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    console.log("Generating");
    let result = "";

    for(let i = 0; i < 35; i++){

        // here 52 is the length of the string we will be taking randomNumber from 0 to 52
        const randomNumber = ~~(Math.random() * 52);
        result += str[randomNumber];
    }

    return result;

}


const Example2 = () => {

    const [show, setShow] = useState(false);
    const [val, setVal] = useState("");

    /* the value of the randomId gets changed when the component get rerendered and
    when the value of state variable val given as value in input gets changed */
    const randomId = useMemo(generateID, [val]);

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