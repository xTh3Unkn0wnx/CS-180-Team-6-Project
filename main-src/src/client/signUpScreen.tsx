import "./App.css";
import React from "react";
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
import { sign } from "crypto";

function signUpScreen() {
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
        
    </div>
  );
}

export default signUpScreen; 


