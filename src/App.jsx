// src/App.jsx
import React from 'react';
import LoginForm from './Pages/LoginPage/LoginForm';
import Signup from './Pages/Signup/SignupForm';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      <ToastContainer position='top-center' />
      </BrowserRouter>
    </div>
  );
}

export default App;
