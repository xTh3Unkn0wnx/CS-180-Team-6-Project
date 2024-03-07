import "./components/App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./homeScreen";
import Login from "./Login"; 
import Signup from "./signUpScreen";
import Forgotpass from "./forgotPassScreen";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { NotFoundPage } from "./components/NotFound";
import { LoginPage } from "./pages/loginPage";
import { HomeScreen } from "./pages/homeScreen";
import { AddMealEntry } from "./pages/addMealEntry";
import { CalendarPage } from "./pages/CalendarPage";
import Scheduleworkout from "./scheduleWorkout";
import ExerciseSearch from "./pages/ExerciseSearch";
import ExerciseDetail from "./pages/ExerciseDetail";
import FoodSearch from "./pages/FoodSearch";
import Cuisine from "./pages/Cuisine";
import Searched from "./pages/Searched";
import Recipe from "./pages/Recipe";

function App() {

  return (
      <div className="">
        <Routes> 
          <Route path="/" element={<Login />} /> 
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/forgotpass" element={<Forgotpass />} />
          <Route path="/scheduleworkout" element={<Scheduleworkout />} /> 
          <Route path="/addMealEntry" element={<AddMealEntry />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
        </Routes>
      </div>
  ); 
}
export default App;