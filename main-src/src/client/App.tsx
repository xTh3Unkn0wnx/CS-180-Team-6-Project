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
import Contactus from "./contactUs";
import Aboutus from "./components/aboutUs";
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
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/addMealEntry" element={<AddMealEntry />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/search-exercise/" element={<ExerciseSearch />} />
          <Route path="/search-exercise/exercise/:id" element={<ExerciseDetail />} />
          <Route path="/search-food" element={<FoodSearch />} />
          <Route path="/search-food/cuisine/:type" element={<Cuisine />}/>
          <Route path="/search-food/search/:search" element={<Searched />}/>
          <Route path="/search-food/recipe/:id" element={<Recipe />}/>
          </Routes>
      </div>
  ); 
}
export default App;
