import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { NotFoundPage } from "./components/NotFound";
import { LoginPage } from "./pages/loginPage";
import { HomeScreen } from "./pages/homeScreen";

function App() {

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
