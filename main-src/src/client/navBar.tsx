import React from "react"; 
import Logo from "./assets/liveActive.jpg"; 
import "./components/navbar.css"; 

function NavBar(){ 
    return (
        <div className="navBar">
            <div className="leftSide">
                <img src={Logo} />
            </div>
            <div className="rightSide">
            <a href="/Scheduleworkout" id="scheduleWorkOut" className="scheduleWorkOut"> Create Workout </a> 
            <a href="/Contactus" id="ContactUsScreen" className="ContactUsScreen"> Contact Us </a> 
            <a href="/Aboutus" id="AboutUsScreen" className="AboutUsScreen"> About Us </a>    
            <div className="navSearch">
                <input type="text" placeholder="Search..." />
            </div>
            </div>
        </div>
    ); 
}

export default NavBar; 