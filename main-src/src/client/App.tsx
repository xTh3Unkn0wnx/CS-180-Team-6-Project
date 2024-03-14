import "./components/App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./homeScreen";
import Login from "./components/Login"; 
import Signup from "./components/signUpScreen";
import Forgotpass from "./components/forgotPassScreen";
import { NotFoundPage } from "./components/NotFound";
// import { AddMealEntry } from "./pages/addMealEntry";
import Calendarpage from "./pages/CalendarPage";
import { ViewMealPage } from "./pages/ViewMealPage";
// import Scheduleworkout from "./scheduleWorkout";
// import Contactus from "./contactUs";
// import Aboutus from "./components/aboutUs";
import ExerciseSearch from "./pages/ExerciseSearch";
import ExerciseDetail from "./pages/ExerciseDetail";
import FoodSearch from "./pages/FoodSearch";
import ExerciseVideos from "./components/ExerciseVideos"
import Cuisine from "./pages/Cuisine"
import Searched from "./components/Search";
import Recipe from "./pages/Recipe";
import { Box } from '@mui/material';


function App() {

  return (
      <div className="">
        <Routes> 
          <Route path="/" element={<Login />} /> 
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/forgotpass" element={<Forgotpass />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/calendar" element={<Calendarpage />} />
          <Route path="/viewMeal" element={<ViewMealPage/>} />
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
