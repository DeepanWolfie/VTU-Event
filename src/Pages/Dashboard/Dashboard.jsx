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
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

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

  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <>
      {userDetail ? (
        <>
        </>
      ) : (
        <p>loading...</p>
      )}
    </>
  );
};

export default Dashboard;
