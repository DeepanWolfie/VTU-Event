import React, { useState } from "react";
import { Container, Button, Typography, Card, Box } from "@mui/material";
import FormField from "../../components/FormFields";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth ,firestore } from "../../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import './SignupForm.css'

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
}

export default Signup;
