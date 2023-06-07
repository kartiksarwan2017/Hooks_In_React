import { useState, useMemo } from "react";
import React from 'react';
import {checkAvailability} from "../utils/features";


const generateID = () => {
  
  const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmonopqrstuvwxyz";
  console.log("Generating");
  let result = "";
  for(let i = 0; i < 35; i++){
    const randomNumber = ~~(Math.random() * 52);
    result += str[randomNumber];
  }

  return result;

}

const Example3 = () => {

  const [show, setShow] = useState(false);
  const [val, setVal] = useState("");
  const [username, setUserName] = useState("");

  const randomId = useMemo(generateID, [val]);
  const usernameAvailable = true;

  return (
    <>
     <div>
      <h1 style={{margin: "40px 0"}}>Example 3</h1>
      <h1 style={{
        fontWeight: "100",
        letterSpacing: 2
      }}>
        #{randomId}
      </h1>

      <input
        type={"text"}
        value={val}
        onChange={(e) => setVal(e.target.value)}
        placeholder= {"Text..."}  
      />


      <div 
        style={{
          padding: "1rem"
        }}
      >
        <label>Username</label>
        <input 
          type={"text"}
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          placeholder={"Username..."}
        />
        <p 
          style={{
            fontSize: "0.7rem",
            color: usernameAvailable ? "green" : "red"
          }}
        >
            {usernameAvailable ? "Username Available" : "Username Already Taken"}
          </p>
      </div>  

      <button onClick={() => setShow((prev) => !prev)}>
        {show ? "Hide" : "Reveal"}
      </button>

      <p>{show ? "show some api" : "***********"}</p>
     </div>
    </>
  )
}

export default Example3;