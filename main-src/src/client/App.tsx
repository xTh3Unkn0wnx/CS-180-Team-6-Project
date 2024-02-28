import "./App.css";
<<<<<<< HEAD
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
=======
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./homeScreen";
import Login from "./Login"; 
import Signup from "./signUpScreen";
import Forgotpass from "./forgotPassScreen";
import Scheduleworkout from "./scheduleWorkout";
import Contactus from "./contactUs";
import Aboutus from "./aboutUs";

const App = () => {

  return (
      <div className="login">
        <Routes> 
          <Route path="/" element={<Login />} /> 
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/forgotpass" element={<Forgotpass />} />
          <Route path="/scheduleworkout" element={<Scheduleworkout />} /> 
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/aboutus" element={<Aboutus />} />
        </Routes>
      </div>
  ); 
}

export default App; 
>>>>>>> 65c113249b289cabd237cb033d121d501d7f8da5
