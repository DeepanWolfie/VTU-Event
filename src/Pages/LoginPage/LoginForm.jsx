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
        <h2 id="login">Welcome Back!</h2>
        <form onSubmit={handleLogin}>
         
          <br />
          <FormField type="text" label="Email"  onChange={(e) => setEmail(e.target.value)} />
          <br />
          <FormField type="password" label="Password" onChange={(e) => setPassword(e.target.value)}></FormField>
          <br />
          <h3>Forgot password?</h3>
          <a href="#" id="forgot">
            Click here
          </a>
<LoginButton value="Login" onClick="submit"  ></LoginButton>

          
        </form>
        <h3 className='have'>Don't have an account ?</h3>
        <span id="account" onClick={signupNaigate}>Signup</span>
      </div>
    
    </>
  );
}

export default LoginForm;
