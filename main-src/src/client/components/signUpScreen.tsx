import "./signUp.css";
import React from "react";
import { Header } from "./Header";
import { Main } from "./Main";
import { NotFoundPage } from "./NotFound";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Signup() {
  const Navigate = useNavigate();

  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  const [data, setData] = useState("");
  const [usernameCreate, setUsername] = useState("");
  const [passwordCreate, setPassword] = useState("");

  const signUpButton = async () => {
    var userCreate = (document.getElementById("username") as HTMLInputElement). value; 
    var passCreate = (document.getElementById("password") as HTMLInputElement).value; 
    var confirmCreate = (document.getElementById("confirm") as HTMLInputElement).value;
    var emailCreate = (document.getElementById("email") as HTMLInputElement).value;
    var nameCreate = (document.getElementById("userName") as HTMLInputElement).value;
    var bdCreate = (document.getElementById("userBD") as HTMLInputElement).value;
    if (userCreate === "" || passCreate === "" || confirmCreate === "" || emailCreate === ""){
      alert("Please fill in all fields");
      return;
    }
    if (passCreate !== confirmCreate){
      alert("Passwords do not match");
      return;
    }
    if (passCreate.length < 8){
      alert("Password must be at least 8 characters long");
      return;
    }
    if (emailCreate.length < 3){
      alert("Invalid email");
      return;
    }
    if (userCreate.length < 3){
      alert("Username must be at least 3 characters long");
      return;
    }
    if (emailCreate.includes("@") === false){ 
      alert("Invalid email");
      return;
    }
    const newUser = { username: userCreate, password: passCreate, email: emailCreate, name: nameCreate, dateOfBirth: bdCreate};
    console.log(newUser);
    axios.post("/users/register", newUser)
    .then(res => {
      console.log(res);
      console.log(res.data);
      alert("Successfully Created New Account. Please login!")
      sessionStorage.setItem("userId", res.data.userId);
      Navigate("/home");
     })
    .catch(err => { 
      console.log(err);
      alert("Username or email already exists"); 
    });
    console.log("Creating new account...");
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
          <input type="text" className="input" id="password" placeholder="Password" required/>
        </div>

        <div className="inputBox">
          <input type="text" className="input" id="confirm" placeholder="Confirm Password" required/>
        </div>

        <div className="inputBox">
          <input type="text" className="input" id="userName" placeholder="Enter Name" />
        </div>

        <div className="inputBox">
          <input type="date" className="input" id="userBD" placeholder="Enter Birthdate"/>
        </div>

        <div className="goBack"> 
          <p> Have an account? <a href="/"> Login </a></p>
        </div>

        <div className="buttonContainer"> 
          <button type="button" className="submitButton" onClick={signUpButton}> Create Account </button>
        </div> 
      </div>
  );
}

export default Signup; 