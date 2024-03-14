import App from "../App"; 
import "./forgotPass.css"
import { useNavigate } from "react-router-dom";  


export const Forgotpass = () => { 

    const navigate = useNavigate(); 

    const forgotPassCheck = async () => {
        alert("Currently Not a Working Feature. Redirecting back to Login...")
        navigate("/");
    }
    return (
        
        <body className="forgotPassword">
            <div className="forgotPassContainer">
                <div className="header"> 
                    <div className="forgotPassHeader"> Forgot Your Password? </div>
                    <div className="forgotPassText"> Enter your email below to recieve a reset password link. </div> 
                    <div className="emailPrompt"> Please Enter Email Below </div>
                    <div className=""> 
                        <input type="text" className="forgotPassInput" id="forgotPassEmail" placeholder="Email" required/>
                    </div>

                    <div className="submitButtonContainer"> 
                        <button className="submitButton" onClick={forgotPassCheck}> Continue </button> 
                    </div> 

                    <div className="returnLogin">
                        <a href="/" className="returnLoginText"> Return to Login</a>
                    </div>
                </div>
            </div>
        </body>
    ); 
}

export default Forgotpass; 