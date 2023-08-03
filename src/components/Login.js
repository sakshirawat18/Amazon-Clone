import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/Login.css";
import login_logo from "../assets/login_logo.png";
import { useState } from "react";
import { auth } from "../firebase";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    console.log("sign in feature",e);
    e.preventDefault();
    
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  const create = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //it successfully created a new user with email and password
        //console.log(auth);
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login_logo" src={login_logo} alt="" />
      </Link>
      <div className="login_container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="signIn_btn" onClick={signIn}>
            Sign in
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>

        <button className="create_btn" onClick={create}>
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
