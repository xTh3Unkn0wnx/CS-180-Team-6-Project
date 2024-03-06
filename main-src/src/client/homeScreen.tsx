import "./components/homeScreen.css"
import Logo from "../client/assets/liveActive.jpg"; 
import { Link } from "react-router-dom";

export const Home = () => {

    return (
        <body className="homeScreen"> 
            <div className="navBar">
                <div className= "leftSide">
                    <li></li>
                    <li><div className="logoText"> Live Active </div></li>
                </div>

                <div className="rightSide">
                    <ul>
                        <li><a href="/" className="links"> Home </a></li>
                        <li><a href="/calendar" className="links"> Calendar </a></li>
                        <li className="dropDownBtn">
                            <a href="javascript:void(0)" className="links"> Menu </a>
                            <div className="dropDownContent">
                                <a href=""> Schedule Workout </a>
                                <a href="/calendar"> View Calendar </a>
                                <a href=""> Create Meal Plan </a>
                                <a href=""> Search For Exercise </a>
                                <a href=""> Search a Meal </a>
                                <a href="/viewmeal">View Meal</a>
                                <a href="/addmealentry"> Add Meal </a>
                            </div>
                        </li>
                        <li><a href="" className="links"> About Us </a></li>
                        <li><a href="" className="links"> Contact Us </a></li>
                    </ul>
                </div>
            </div>

            <div className="homeScreenContainer">
                <div className="featureContainer"> 
                    <a href="/calendar" className="clickableContainer"> 
                        <div className="calendarBox"> 
                            <div className="textBottomWorkout"> Schedule Workout</div>
                        </div>
                    </a>

                    <a href="" className="clickableContainer"> 
                        <div className="mealBox">
                            <div className="textBottomCreateMeal"> Create Meal Plan </div>
                        </div>
                    </a>

                    <a href="" className="clickableContainer"> 
                        <div className="searchExerciseBox">
                            <div className="textBottomSearchExercise"> Search Exercise </div>
                        </div>
                    </a>

                        <a href="" className="clickableContainer"> 
                            <div className="searchMealBox">
                                <div className="textBottomSearchMeal"> Search Meal </div>
                            </div>
                        </a>

                    <a href="/viewMeal" className="clickableContainer"> 
                            <div className="viewMealBox">
                                <div className="textBottomViewMeal"> View Meal </div>
                            </div>
                    </a>

                    <a href="/addMealEntry" className="clickableContainer"> 
                            <div className="addMealBox">
                                <div className="textBottomAddMeal"> Add Meal </div>
                            </div>
                    </a>
                </div>

                <div className="welcomeContainer"> 
                    <div className="welcomeContainerText"><text> Welcome Back! Ready to have a good workout? Select a something to get started! </text></div>
                    <div className="sidePicture">
                        <div className="someContainer"></div>
                    </div>
                </div>
            </div>
        </body>
    ); 
}

export default Home; 

