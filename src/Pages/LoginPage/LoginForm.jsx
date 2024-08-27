import React, { useState } from "react";
import "./LoginForm.css";

import FormField from "../../components/FormFields";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import LoginButton from "../../components/LoginButton/LoginButton";
import { toast } from "react-toastify";
import {
  Container,
  Button,
  Typography,
  Box,
  Paper,
  CssBaseline,
  Divider,
} from "@mui/material";
import { LockOutlined as LockOutlinedIcon } from "@mui/icons-material";
function LoginForm() {
  const navi = useNavigate();
  function signupNaigate() {
    navi("/signup");
  }
  function oginpage() {
    navi("/dashboard");
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in successfully");
      oginpage();
      toast.success("Success !");
    } catch (err) {
      toast.error(`Error: ${err.message}`);
    }
  };
  const handleForgetPassword = () => {
    window.alert("Forget Password clicked!");
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper
          elevation={6}
          sx={{
            padding: 3,
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <LockOutlinedIcon color="primary" fontSize="large" />
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
          </Box>
          <Box component="form" onSubmit={handleLogin} sx={{ mt: 1 }}>
            <FormField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
            />
            <FormField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "end",
                flexDirection: "column",
              }}
            >
              <Typography variant="h7">
                Forget password? <span className="click">click here</span>
              </Typography>
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Divider />
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "end",
                flexDirection: "column",
              }}
            >
              <Typography>
                {" "}
                Don't have account?{" "}
                <span className="click" onClick={signupNaigate}>
                  Signup
                </span>
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Container>

      {/* <div className="container">
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
     */}
    </>
  );
}

export default LoginForm;
