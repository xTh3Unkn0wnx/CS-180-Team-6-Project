import "./App.css";
import React from "react";
import { Navigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { NotFoundPage } from "./components/NotFound";
import axios from "axios";
import ICON from "./assets/icon.png"

import reactLogo from "./assets/react.svg";
import { stringify } from "querystring";
import { addSyntheticLeadingComment } from "typescript";

import { createContext, useState } from "react"; 
import { View, Pressable, TextInput, Image, Text, StyleSheet, Button} from 'react-native'; 
import Home from "./homeScreen";
import { SafeAreaView } from "react-native-safe-area-context";


const LoginScreen = () => {
  function handleLogin () {
     
  }

  return (
    <div className="stuff">
            <h1> Live Active </h1>  
      </button>
      <Routes> 
        <Route path="/" element={<Home />} /> 
      </Routes>
    </div>
  ); 
}

export default LoginScreen; 