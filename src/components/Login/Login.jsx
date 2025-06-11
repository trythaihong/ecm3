import { useState } from "react";
import "./Login.css";
import { assets } from "../../assets/assets";
const Login = ({ setshowLogin }) => {
  const [currState, setCurrState] = useState("login");

  return (
    <div className="LoginPopup">
      <form action="" className="login-container">
        <div className="loginpopup">
          <h2>{currState}</h2>
          <img
            onClick={() => setshowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popp-input">
          {currState === "login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your Name" required />
          )}

          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="password" required />
        </div>
        <button>{currState === "Sign up" ? "Create account" : "Login"}</button>
        <div className="login-con">
          <input type="checkbox" required />
          <p>i agree this them</p>
        </div>
        {currState === "login" ? (
          <p>
            Create New account?{" "}
            <span onClick={() => setCurrState("Sign up")}>Click Here</span>
          </p>
        ) : (
          <p>
            Alredy have account{" "}
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
