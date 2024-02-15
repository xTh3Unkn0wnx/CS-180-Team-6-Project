  import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { NotFoundPage } from "./components/NotFound";
import { LoginPage } from "./pages/loginPage";
import { HomeScreen } from "./pages/homeScreen";
import { useState } from "react";
import axios from "axios";

import { stringify } from "querystring";
import { addSyntheticLeadingComment } from "typescript";
import e from "express";

function App() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [userId, setUserId] = useState("");

  // const loginButton = async () => {
  //   var email = (document.getElementById("usernameLogin") as HTMLInputElement). value; 
  //   var password = (document.getElementById("passwordLogin") as HTMLInputElement).value;
    
  //   axios.post('/users/login', {email, password})
  //   .then((response) => {
  //     console.log(response.data);
  //     if(response.data.loggedIn){
  //       setIsLoggedIn(true);
  //       setUserId(response.data.userId);
  //       sessionStorage.setItem("userId", response.data.userId);
  //       window.location.assign("homeScreen.tsx");
  //     } else {
  //       alert(response.data.msg);
  //       alert("Invalid credentials");
  //     }
  //   })
  //   .catch((error) => {
  //     if (error.response) {
  //       console.log(error.response.data);
  //       console.log(error.response.status);
  //       console.log(error.response.headers);
  //     } else if (error.request) {
  //       console.log(error.request);
  //     } else {
  //       console.log('Error', error.message);
  //     }
  //   })
  // };

  // const signUpButton = () => {

  // }

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {/* <h1> Live Active </h1>  
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
    </div> */}
  </div>
  
  );
}

export default App;