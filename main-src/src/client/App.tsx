import "./components/App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./homeScreen";
import Login from "./components/Login"; 
import Signup from "./signUpScreen";
import Forgotpass from "./components/forgotPassScreen";
import { NotFoundPage } from "./components/NotFound";
import { Calendarpage } from "./pages/CalendarPage";
import { ViewMealPage } from "./pages/ViewMealPage";
import ExerciseDetail  from "./pages/ExerciseDetail"
import ExerciseSearch from "./pages/ExerciseSearch"
import FoodSearch from "./pages/FoodSearch";
import ExerciseVideos from "./components/ExerciseVideos"


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
          <Route path="/exerciseDetail" element={<ExerciseDetail /> } />
          <Route path="/exerciseSearch" element={<ExerciseSearch />} />
          <Route path="/foodSearch" element={<FoodSearch />} />
        </Routes>
      </div>
  ); 
}
export default App;