import "./components/App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./homeScreen";
import Login from "./components/Login"; 
import Signup from "./components/signUpScreen";
import Forgotpass from "./components/forgotPassScreen";
/* import { NotFoundPage } from "./components/NotFound"; */ 
import  Calendarpage  from "./pages/CalendarPage";
import ViewMeal from "./components/ViewMeal";
import AddMealEntry from "./components/addMealEntry";
/* import Scheduleworkout from "./scheduleWorkout";
import Contactus from "./contactUs";
import Aboutus from "./components/aboutUs"; */

function App() {

  return (
      <div className="">
        <Routes> 
          <Route path="/" element={<Login />} /> 
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/forgotpass" element={<Forgotpass />} />
          { /* <Route path="/aboutus" element={<Aboutus />} /> 
          <Route path="/scheduleworkout" element={<Scheduleworkout />} /> 
          <Route path="/contactus" element={<Contactus />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/addMealEntry" element={<AddMealEntry trigger={false} setTrigger={function (value: boolean): void {
          throw new Error("Function not implemented.");
          } } addMeal={function (meal: any): void {
          throw new Error("Function not implemented.");
          } } />} /> 
          */ }
          <Route path="/calendar" element={<Calendarpage />} />
          
        </Routes>
      </div>
  ); 
}
export default App;