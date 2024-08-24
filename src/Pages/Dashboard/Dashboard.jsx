import React, { useEffect, useState } from "react";
import { auth, firestore } from "../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import {
  Typography,
  Menu,
  Button,
  AppBar,
  Container,
  Avatar,
  Tooltip,
  MenuItem,
  Box,
  Toolbar,
  IconButton,
} from "@mui/material";
import './Dashboard.css';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const [userDetail, setUserDetail] = useState(null);

  const navi = useNavigate();
  function loginpage() {
    navi("/");
  }
  const signout = async () => {
    try {
      await auth.signOut();
      loginpage();
    } catch (e) {
      console.error("Error signing out:", e);
    }
  };

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const docRef = doc(firestore, "Users", user.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setUserDetail(docSnap.data());

            console.log(user);
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching user data: ", error);
        }
      } else {
        console.log("No user is signed in");
      }
    });
  };
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
      const interval = setInterval(() => {
          setCurrentSlide((prevSlide) => (prevSlide >= 4 ? 1 : prevSlide + 1));
      }, 5000);

      return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <>
      {userDetail ? (
        <>
          
          <Typography>{ userDetail.email}</Typography>

            <div className="slider">
            <div className="slides">
                
                <div className={`slide ${currentSlide === 1 ? 'active' : ''}`}>
    <img src="https://picsum.photos/600/400" alt="Image 1" />
</div>
<div className={`slide ${currentSlide === 2 ? 'active' : ''}`}>
    <img src="https://picsum.photos/500/400" alt="Image 2" />
</div>
<div className={`slide ${currentSlide === 3 ? 'active' : ''}`}>
    <img src="https://picsum.photos/800/400" alt="Image 3" />
</div>
<div className={`slide ${currentSlide === 4 ? 'active' : ''}`}>
    <img src="https://picsum.photos/900/400" alt="Image 4" />
</div>

               
                <div className="navigation-manual">
                    <button
                        className={`manual-btn ${currentSlide === 1 ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(1)}
                    >  </button>
                    <button
                        className={`manual-btn ${currentSlide === 2 ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(2)}
                    ></button>
                    <button
                        className={`manual-btn ${currentSlide === 3 ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(3)}
                    ></button>
                    <button
                        className={`manual-btn ${currentSlide === 4 ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(4)}
                    ></button>
                </div>
            </div>
        </div>
        </>
      ) : (
        <p>loading...</p>
      )}
    </>
  );
};

export default Dashboard;
