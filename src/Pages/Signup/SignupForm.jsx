import React, { useState } from "react";
import { Container, Button, Typography, Card, Box } from "@mui/material";
import FormField from "../../components/FormFields";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth ,firestore } from "../../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import './SignupForm.css'
=======
import LoginButton from "../../components/LoginButton/LoginButton";
>>>>>>> e1b48fe05e391e3e0121233b7bf253cf2774c2ff

function Signup() {
  const navi=  useNavigate();
  function loginpage() {
    navi('/');
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [vtuno, setVtuno] = useState("");
  const [mentorName, setMentorName] = useState("");
  const [mentorPhone, setMentorPhone] = useState("");
  const [department, setDepartment] = useState("");
  const [studentPhone, setStudentPhone] = useState("");
  const [year, setYear] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleSignup = async (event) => {
    event.preventDefault(); // Prevent default form submission
    setError("");
    setSuccess("");
    try {
      // Create user with Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = auth.currentUser;

      const docRef = doc(firestore, "Users", user.uid); // Create a reference to the document
await setDoc(docRef, {
  name: name,
  phone: studentPhone,
  email: email,
  dob: dob,
  vtu_no: vtuno,
  mentor_name: mentorName,
  mentor_phone: mentorPhone,
  department: department,
  year: year,
});

      setSuccess("Account created and data saved successfully!");
    } catch (err) {
      setError(`Error: ${err.message}`); // Improved error message display
    }
  };
  return (
<<<<<<< HEAD
  <>
<div className="signup-box">
<h1 className="title">Create Your Account Now..!</h1>
<form>
  <label htmlFor="Name" id="label">Name</label><br/>
  <input type="text" title="Name"  placeholder="Enter your name"className="enter-name"/><br />
  <label htmlFor="Email" id="mail">Email</label><br/>
  <input type="Email" title="Email"  placeholder="Enter your vtu mail"className="mail"/> <br />
  <label htmlFor="Vtu-no" id="vtu">Vtu Num</label> <br />
  <input type="text"title="vtu number" placeholder="Enter your vtu number" className="vtu-number"/> <br />
  <label htmlFor="password" id="word">Password</label> <br />
  <input type="password"title="password"  placeholder="Enter Your password" className="word"/> <br />
  <label htmlFor="Mentor" id="mentor">Mentor Name</label><br />
  <input type="text" tittle="mentor-name" placeholder="Enter Your mentor name" className="mentor"/><br />
  <label htmlFor="Mentor" id="mentor-phnum">Mentor Phone</label><br />
  <input type="text" tittle="mentor-number" placeholder="Enter Your mentor phone number" className="mentor-phnum"/><br />
  <label htmlFor="Dob" id="stud-dob">Student-DOB</label><br />
  <input type="date" tittle="mentor-number" placeholder="Date of Birth" className="stud-dob"/><br />
  <div>
    <label htmlFor="Year of study" id="yos"> Year of Studying:</label><br />
        <select className="yos" name="Year of Study">
            <option value="null"> Year of study</option>
            <option> 2year </option>
            <option>3year</option>
            <option>4year</option>
        </select>
    </div>
    <div>
    <label htmlFor="Branch" id="branch"> Studying Branch:</label><br />
        <select className="branch" name="Studying Branch">
            <option>CSE </option>
            <option>AIDS</option>
            <option>AIML</option>
            <option>CYBER SECURITY(CS)</option>
            <option>CSE-AIDS</option>
            <option>CSE-AIML</option>
            <option>CSE-CS</option>
        </select>
    </div>
</form>
<button className="register">Register</button>
<h3 className="space">Already having an account?</h3>
</div>
<span id="log" onClick={loginpage}>Login</span>
  </>);
=======
    <>
     
        <Button onClick={loginpage}
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#efefef",
              color: "black",
              borderRadius: "50px",
              mt: 2,
            }}
            fullWidth
          >
             Back top login Page
          </Button>
        
        <Typography variant="h3" gutterBottom>
          Signup
        </Typography>
        <form onSubmit={handleSignup}>
          <FormField
            label="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FormField
            label="VTU-Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormField
            label="VTU-No"
            type="text"
            value={vtuno}
            onChange={(e) => setVtuno(e.target.value)}
          />
          <FormField
            label="Phone"
            type="tel" // Changed to tel for phone numbers
            value={studentPhone}
            onChange={(e) => setStudentPhone(e.target.value)}
          />
          <FormField
            label="Department"
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
          <FormField
            label="Year"
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
          <FormField
            label="DOB"
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
          <FormField
            label="Mentor Name"
            type="text"
            value={mentorName}
            onChange={(e) => setMentorName(e.target.value)}
          />
          <FormField
            label="Mentor Phone"
            type="tel" // Changed to tel for phone numbers
            value={mentorPhone}
            onChange={(e) => setMentorPhone(e.target.value)}
          />

          <LoginButton value="Sign Up"></LoginButton>

          {error && (
            <Typography color="error" sx={{ mt: 2 }}>
              {error}
            </Typography>
          )}
          {success && (
            <Typography color="success" sx={{ mt: 2 }}>
              {success}
            </Typography>
          )}
        </form>
      
    </>
  );
>>>>>>> e1b48fe05e391e3e0121233b7bf253cf2774c2ff
}

export default Signup;
