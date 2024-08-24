import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Box,
  Typography,
  FormControl,
  Card,
  Divider,
} from '@mui/material';
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
    <Container maxWidth="sm">

      <Typography variant='h5' color="textSecondary" sx={{my:4}} >
        Welcome 
</Typography>

      <Card sx={{ mt: 8, p: 4, border: '1px solid #ccc', borderRadius: 2 }} elevation={10}>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleLogin}>
        <FormField
            label="VTU-Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormField
            label="Password"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          

          <Typography
            variant="body2" 
            sx={{ mb: 2,  textAlign:'right'}}
            onClick={handleForgetPassword}
          >
            Forget Password?{' '}
            <span style={{ color: 'blue' }}>Click here</span>
          </Typography>
          <LoginButton value="hello" onClick={console.log("first") }></LoginButton>
          <Button
            type="submit"
            variant="contained"
            sx={{ backgroundColor: '#efefef', color: 'black', borderRadius: '50px' }}
            fullWidth
          >
            Login
          </Button>

          <Divider sx={{ my: 2 }} />

          
        </form>
        <Button
          onClick={signupNaigate}
            variant="contained"
            sx={{ backgroundColor: '#efefef', color: 'black', borderRadius: '50px' }}
            fullWidth
          >
            Sign up
          </Button>

       
      </Card>
    </Container>
  );
}

export default LoginForm;
