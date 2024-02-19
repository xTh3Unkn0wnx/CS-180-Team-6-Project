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
import Logo from "./assets/liveActive.jpg"
import NavBar from "./navBar";

const Home = () => {
    return (
        <NavBar>
        </NavBar>
    ); 
}

export default Home; 
