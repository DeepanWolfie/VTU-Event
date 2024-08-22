import React, { useState } from "react";
import { Container, Button, Typography, Card, Box } from "@mui/material";
import FormField from "../../components/FormFields";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth ,firestore } from "../../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

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
    <Container maxWidth="sm">
      <Card
        sx={{ mt: 8, p: 4, border: "1px solid #ccc", borderRadius: 2 }}
        elevation={10}
      >
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

          <Button
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
            Sign Up
          </Button>

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
      </Card>
    </Container>
  );
}

export default Signup;
