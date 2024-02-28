import React from "react";
import { useNavigate } from "react-router-dom";  
import axios from "axios";
import { useState } from "react";
import "./Login.css"


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
    <body>
        <section> 
      <div className="container">
        <div className="header">
          <div className="text"> Login </div>
        </div>
          <div className="loginInputs">
            <div className="input"> 
              <input type="text" name="usernameLogin" id="usernameLogin" placeholder="Username" required/>
            </div>

            <div className="loginInputs">
              <input type="text" name="passwordLogin" id="passwordLogin" placeholder="Password" required/>
            </div>

            <div>
              <a href="#"> Forgot Password </a>
            </div>

            <div> 
              <p> Don't have an account? <a href="#"> Register</a> </p>
            </div>

            <div> 
              <button type="button" onClick={handleLogin}> Login </button>
            </div> 
          </div>
        </div>
      </section>
    </body>

    )
}

export default Login; 
