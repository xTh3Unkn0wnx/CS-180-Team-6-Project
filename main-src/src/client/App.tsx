import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { NotFoundPage } from "./components/NotFound";
import { LoginPage } from "./pages/loginPage";
import { HomeScreen } from "./pages/homeScreen";
import { AddMealEntry } from "./pages/addMealEntry";
import { CalendarPage } from "./pages/CalendarPage";

function App() {

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/addMealEntry" element={<AddMealEntry />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
    </div>
  );
}

export default App;
