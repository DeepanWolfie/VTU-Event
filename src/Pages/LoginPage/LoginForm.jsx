import React, { useState } from 'react';
import './LoginForm.css';

import FormField from "../../components/FormFields";
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import LoginButton from '../../components/LoginButton/LoginButton';

function LoginForm() {
  const navi=  useNavigate();
  function signupNaigate() {
    navi('/signup');
  }
  function oginpage() {
    navi('/dashboard');
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); 
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in successfully");
      oginpage();
    } catch (err) {
      setError(err.message);
    }
  };
  const handleForgetPassword = () => {

    window.alert('Forget Password clicked!');
  };

  return (
    <>
    <div className="container">
        <h2 id="name">Veltech events and registration portal.</h2>
        <h2 id="login">Welcome Back..!</h2>
        <form>
          <label htmlFor="email" className="email">
            Email
          </label>
          <br />
          <input
            type="text"
            name="email"
            className="email-input"
            placeholder="Enter Your email"
            title="email"
          />
          <label htmlFor="password" className="password">
            Password
          </label>
          <br />
          <input
            type="password"
            name="password"
            className="password-input"
            placeholder="Enter Your password"
            title="password"
          />
          <h3>Forgot password?</h3>
          <a href="#" id="forgot">
            Click here{" "}
          </a>
          <button id="button">
            <a href="https://www.google.com">SignIn</a>
          </button>
        </form>
        <h3 className='have'>Don't have an account ?</h3>
        <span id="account" onClick={signupNaigate}>Signup</span>
      </div>
    
    </>
  );
}

export default LoginForm;
