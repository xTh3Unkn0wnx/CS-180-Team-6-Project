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
}

export default App;