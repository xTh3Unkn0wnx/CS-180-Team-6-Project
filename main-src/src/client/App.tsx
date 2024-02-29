import "./components/App.css";
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