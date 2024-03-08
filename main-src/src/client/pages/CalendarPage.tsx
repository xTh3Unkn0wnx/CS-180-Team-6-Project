import React from "react";
import { Header } from "../components/Header";
import CalendarComponent from "../components/CalendarComponent";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import "../components/calenderPageScreen.css"

export const Calendarpage = () => {
  return (
    <div className="calenderPageScreen">
      <Header title="Live Active"/>
      <CalendarComponent />
      <Footer/>
    </div>
  );
};


export default Calendarpage;
