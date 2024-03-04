import React from "react";
import { useNavigate } from "react-router-dom";  
import axios from "axios";
import { useState } from "react";
import "./components/Login.css"


export const Login = () => { 

  const navigate = useNavigate(); 

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState("");

  const handleLogin = async () => {
    var email = (document.getElementById("usernameLogin") as HTMLInputElement)
      .value;
    var password = (
      document.getElementById("passwordLogin") as HTMLInputElement
    ).value;
    axios
      .post("/users/login", { email, password })
      .then((response) => {
        console.log(response.data);
        if (response.data.loggedIn) {
          setIsLoggedIn(true);
          setUserId(response.data.userId);
          sessionStorage.setItem("userId", response.data.userId);
          alert("Successful Login. Redirecting to home...")
          navigate("/home");
        } else {
          alert(response.data.msg);
          alert("Invalid credentials");
          navigate("/"); 
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
      });
  };

  return (
    <body className="loginScreen">
      <div className="container">
          <div className="header"> Live Active </div>
          <div className="headerLogin"> Have an account? Login in below! </div>
            <div className="inputBox"> 
              <input type="text" className="input" id="usernameLogin" placeholder="Username" required/>
            </div>

            <div className="inputBox">
              <input type="text" className="input" id="passwordLogin" placeholder="Password" required/>
            </div>

            <div className="forgotPass">
              <a href="/forgotpass"> Forgot Password? </a>
            </div>

            <div className="register"> 
              <p> Don't have an account? <a href="/signup"> Register</a> </p>
            </div>

            <div className="buttonContainer"> 
              <button type="button" className="loginButton" onClick={handleLogin}> Login </button>
            </div> 
      </div>
    </body>
  )
}

export default Login; 
