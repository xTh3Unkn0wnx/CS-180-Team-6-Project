import "./components/signUp.css";
import React from "react";
import { Header } from "./Header";
import { Main } from "./Main";
import { NotFoundPage } from "./NotFound";
import { useState } from "react";


function Signup() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  const [data, setData] = useState("");
  const [usernameCreate, setUsername] = useState("");
  const [passwordCreate, setPassword] = useState("");

  const signUpButton = async () => {
    var userCreate = (document.getElementById("usernameCreate") as HTMLInputElement). value; 
    var passCreate = (document.getElementById("passwordCreate") as HTMLInputElement).value; 

    window.location.assign("App.tsx"); 
    alert("Successfully Created New Account. Please login!")
  };

  return (
      <div className="signUpContainer"> 
        <div className="header"> Create Your Account </div>

        <div className="inputBox"> 
          <input type="text" className="input" id="username" placeholder="Username" required/>
        </div>

        <div className="inputBox">
          <input type="text" className="input" id="email" placeholder="Email" required/>
        </div>

        <div className="inputBox">
          <input type="text" className="input" id="" placeholder="Password" required/>
        </div>

        <div className="inputBox">
          <input type="text" className="input" id="" placeholder="Confirm Password" required/>
        </div>

        <div className="goBack"> 
          <p> Have an account? <a href="/"> Login </a></p>
        </div>

        <div className="buttonContainer"> 
          <button type="button" className="submitButton"> Create Account </button>
        </div> 
      </div>
  );
}

export default Signup; 


