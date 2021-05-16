import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import HeaderZero from "./components/AppBar/HeaderZero.js";
import ClassTab from "./components/ClassTab";
import CourseList from "./components/CourseList";
import Profile from "./components/Profile";
import MainHeader from "./components/AppBar/MainHeader";
import Home from "./components/Home";
import Classroom from "./components/Classroom";


  
const App = () => {

  return (
    <div >
     
      <Classroom/>

    </div>
  );
};
  
export default App;
