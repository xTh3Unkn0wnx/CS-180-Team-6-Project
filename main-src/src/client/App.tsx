  import "./App.css";
import React from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { useState } from "react";
import axios from "axios";
import ICON from "./assets/icon.png"

import reactLogo from "./assets/react.svg";
import { stringify } from "querystring";
import { addSyntheticLeadingComment } from "typescript";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  const [data, setData] = useState("");
  const [username, setUsername] = useState("ochen011");
  const [password, setPassword] = useState("Testpassword123");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  axios.get('/api/hello')
  .then((response) => setMessage(response.data));

  const loginButton = async () => {
    if (data != ""){
      setData("");
    }
    else {
      try {
        const response = await axios.get('/api/data');
        setData(response.data)
      } catch (err) {
        console.error(`Error fetxhing data:`, err);
      }
    }
  };

    const handleLogin = async () => {

    }

  return (
    <div className="App">
      <h1> Live Active </h1>  
        <img src="src/client/assets/liveActive.jpg" width="200" height="200"/>
        <div>
          <h2> Login </h2>
            <label> 
              UserName: 
              <input
                type="text"
                value={username}
              />
            </label>
          <br /> 
          <br /> 
            <label>
              Password: 
              <input
                type="text"
                value={password}
              />
            </label>
        </div>
      <br /> 
      <div>
      </div>
      <button onClick={loginButton}>
        Login
      </button>
    </div>
  );
}

export default App;