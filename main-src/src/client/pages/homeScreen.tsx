import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";

export const HomeScreen = () => {

    return (
        <>
            <Header title="Live Active" />
            <NavBar />
            <h2>
                Welcome! This is the home screen
            </h2>
            <Footer />
        </>
    )
};