  import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { NotFoundPage } from "./components/NotFound";
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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  axios.get('/api/hello')
  .then((response) => setMessage(response.data));

  const loginButton = async () => {
    var email = (document.getElementById("usernameLogin") as HTMLInputElement). value; 
    var password = (document.getElementById("passwordLogin") as HTMLInputElement).value; 

    if(email=="ochen011@ucr.edu" && password=="test123"){
      window.location.assign("homeScreen.tsx");
      alert("Successful Login");
    }else{
      alert("Wrong Username or Password. Try again!")
    }
  };

  const signUpButton = () => {

  }

  return (
    <div className="container">
      <h1> Live Active </h1>  
        <img src="src/client/assets/liveActive.jpg" width="200" height="200"/>
        <form> 
        <div>
          <h2> Already have an account? Login below! </h2>
            <div className="userNameLogin">
            <label> 
              Username: 
              <input type="text" name="usernameLogin" id="usernameLogin" placeholder="Username" />
            </label>
            </div>
          <br/>   
            <div className="passwordLogin"> 
            <label>
              Password: 
              <input type="text" name = "passwordlogin" id="passwordLogin" placeholder="Password" />
            </label>
            </div>
        </div>
        </form>
      <br /> 
      <div>
      </div>
      <button onClick={loginButton}>
        Login
      </button>
    
    <br/>
    <br/> 

    <div className="bottom-container">
      <div className="row">
        <div className="signUp">
          <a href="" id="signup" className="signup">Sign up</a>
        </div>

        <div className="forgotPassword">
        <a href="#" id="forgotpass" className="forgotpass">Forgot password?</a>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default App;