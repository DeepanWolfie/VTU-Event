import React, { useEffect, useState } from "react";
import { auth, firestore } from "../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { Typography } from "@mui/material";

const Dashboard = () => {
    const [userDetail, setUserDetail] = useState(null);
    /*
  const getuserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      const docget = doc(firestore, "Users", user.uid);
      const setdoc = getDoc(docget);
      if (setdoc.exists()) {
        setUserDetail(setdoc.data);
      }
    });
  };*/
    
 
const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const docRef = doc(firestore, "Users", user.uid);
          const docSnap = await getDoc(docRef); 
  
          if (docSnap.exists()) {
            setUserDetail(docSnap.data()); 
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
          <Typography>{userDetail.name}</Typography>
          <Typography>{userDetail.dob}</Typography>
          <Typography>{userDetail.department}</Typography>
        </>
      ) : (
        <p>loading...</p>
      )}
    </>
  );
};

export default Dashboard;
