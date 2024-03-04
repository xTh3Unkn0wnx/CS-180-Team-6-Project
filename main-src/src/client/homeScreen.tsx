import "./components/homeScreen.css"
import Logo from "../client/assets/liveActive.jpg"; 
import HomePic from "../client/assets/homeScreenPic.jpg"; 

const Home = () => {
    return (
        <body className="homeScreen"> 
            <div className="navBar">
                <div className="leftSide">
                    <li><img src={Logo}/></li>
                    <li><div className="logoText"> Live Active </div></li>
                </div>

                <div className="rightSide">
                    <ul>
                        <li><a href="" className="links"> Home </a></li>
                        <li className="dropDownBtn">
                            <a href="javascript:void(0)" className="links"> Menu </a>
                            <div className="dropDownContent">
                                <a href=""> Schedule Workout </a>
                                <a href=""> View Calendar </a>
                                <a href=""> Create Meal Plan </a>
                            </div>
                        </li>
                        <li><a href="" className="links">  </a></li>
                        <li><a href="" className="links"> About Us </a></li>
                        <li><a href="" className="links"> Contact Us </a></li>
                    </ul>
                </div>
            </div>

            <div className="featureContainer"> 
                <a href="/login" className="clickableContainerViewCalendar"> 
                    <div className="calendarBox"> 
                        <div className="textBottom"> Schedule Workout</div>
                    </div>
                </a>

                <a href="" className="clickableContainerMealPlan"> 
                    <div className="mealBox">
                        <div className="textBottomMeal"> Create Meal Plan </div>
                    </div>
                </a>

                <a href="" className="clickableContainerSearchExercises">
                    
                </a>
            </div>

        </body>
    ); 
}

export default Home; 

