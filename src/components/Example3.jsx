import { useState, useMemo } from "react";
import React from 'react';
import {checkAvailability , generateID} from "../utils/features";



const Example3 = () => {

  const [show, setShow] = useState(false);
  const [val, setVal] = useState("");
  const [username, setUserName] = useState("");

  const randomId = useMemo(generateID, [val]);
  const usernameAvailable = useMemo(checkAvailability, [username]);

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