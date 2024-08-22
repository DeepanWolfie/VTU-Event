// src/App.jsx
import React from 'react';
import LoginForm from './Pages/LoginPage/LoginForm';
import Signup from './Pages/Signup/SignupForm';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
