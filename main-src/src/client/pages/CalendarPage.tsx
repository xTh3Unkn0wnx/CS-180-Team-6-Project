import React from "react";
import { Header } from "../Header";
import CalendarComponent from "../components/CalendarComponent";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

export const CalendarPage = () => {
  return (
    <>
      <Header title="Live Active"/>
      <CalendarComponent />
      <Footer/>
    </>
  );
};

export default CalendarPage;
