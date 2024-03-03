import "./components/App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./homeScreen";
import Login from "./components/Login"; 
import Signup from "./components/signUpScreen";
import Forgotpass from "./components/forgotPassScreen";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { NotFoundPage } from "./components/NotFound";
import { LoginPage } from "./pages/loginPage";
import { HomeScreen } from "./pages/homeScreen";
import { AddMealEntry } from "./pages/addMealEntry";
import { CalendarPage } from "./pages/CalendarPage";
import { ViewMealPage } from "./pages/ViewMealPage";
/* import Scheduleworkout from "./scheduleWorkout";
import Contactus from "./contactUs";
import Aboutus from "./components/aboutUs";*/

function App() {

  return (
      <div className="">
        <Routes> 
          <Route path="/" element={<Login />} /> 
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/forgotpass" element={<Forgotpass />} />
          {/* <Route path="/scheduleworkout" element={<Scheduleworkout />} /> 
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/aboutus" element={<Aboutus />} /> */}
          <Route path="/addMealEntry" element={<AddMealEntry />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/viewMeal" element={<ViewMealPage/>} />
        </Routes>
      </div>
  ); 
}
export default App;