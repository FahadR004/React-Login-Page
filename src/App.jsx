import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function App() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const [hovered, setHovered] = useState(false);

    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    }
  
  return (
    <>
    <main>
      <form className="form" action="" method="POST">
        <div className="main_heading">
          <h1 className="Instrux">INSTRUX</h1>
          <h1 className="Dashboard">DASHBOARD</h1>
        </div>
        <p className="login_para">Login using account credentials provided by your organization</p>
        <fieldset>
            <input id="email" type="email" placeholder="Email" required/>
        </fieldset>
        <div className="password-field">
            <FontAwesomeIcon 
                id="lock" 
                icon={faLock} 
                style={{ color: "#474f58" }} 
            />
            <input 
                id="password" 
                type={passwordVisible ? "text" : "password"} 
                placeholder="Enter your Password" 
                required
            />
            <FontAwesomeIcon   /* eye-slash icon from FontAwesome */
                id="eye-icon" 
                icon={passwordVisible ? faEye : faEyeSlash} 
                style={{ color: hovered ? "#019950" : "#00c768", cursor: "pointer", padding: passwordVisible ? "0.8em" : "0.8em 0.7em"}}                
                onClick={togglePasswordVisibility}
                onMouseEnter={() => {setHovered(true)}}
                onMouseLeave={() => {setHovered(false)}}
            />    
        </div>
        <button className="login-btn">Login</button>
      <p className="forgot">Forgot Password? <a href="reset.html">Reset it</a></p>
      <p className="account">Don't have an account? <a href="signup.html">Signup</a></p>
      </form>
    </main>
   </>
  )
}

