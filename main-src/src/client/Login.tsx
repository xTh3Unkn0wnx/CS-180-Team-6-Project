import React from "react";
import { useNavigate } from "react-router-dom";  
import axios from "axios";
import { useState } from "react";


export const Login = () => { 

  const navigate = useNavigate(); 

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState("");

  const handleLogin = async () => {
    var email = (document.getElementById("usernameLogin") as HTMLInputElement)
      .value;
    var password = (
      document.getElementById("passwordLogin") as HTMLInputElement
    ).value;
    axios
      .post("/users/login", { email, password })
      .then((response) => {
        console.log(response.data);
        if (response.data.loggedIn) {
          setIsLoggedIn(true);
          setUserId(response.data.userId);
          sessionStorage.setItem("userId", response.data.userId);
          navigate("/home");
        } else {
          alert(response.data.msg);
          alert("Invalid credentials");
          navigate("/"); 
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
      });
  };

    return (
<>
      <h1> Live Active </h1>
      <img src="src/client/assets/liveActive.jpg" width="200" height="200" />
      <form>
        <div>
          <h2> Already have an account? Login below! </h2>
          <div className="userNameLogin">
            <label>
              Username:
              <input
                type="text"
                name="usernameLogin"
                id="usernameLogin"
                placeholder="Username"
              />
            </label>
          </div>
          <br />
          <div className="passwordLogin">
            <label>
              Password:
              <input
                type="text"
                name="passwordlogin"
                id="passwordLogin"
                placeholder="Password"
              />
            </label>
          </div>
        </div>
      </form>
      <br />
      <div></div>
      <button onClick={handleLogin}>Login</button>

      <br />
      <br />

      <div className="bottom-container">
        <div className="row">
          <div className="signUp">
            <a href="/Signup" id="signup" className="signup">
              Sign up
            </a>
          </div>

          <div className="forgotPassword">
            <a href="/Forgotpass" id="forgotpass" className="forgotpass">
              Forgot password?
            </a>
          </div>
        </div>
      </div>
    </>
    )
}

export default Login; 
