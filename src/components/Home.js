import React, { useState, useEffect } from "react";
import MainHeader from "./AppBar/MainHeader";
import CourseList from "./CourseList";
import Profile from "./Profile";
import ClassHeader from "./AppBar/ClassHeader";
// Redux
import { useSelector, useDispatch } from "react-redux";
import {getUserDataAction} from '../redux/actions/authActions';

function Home(props) {
  const { user } = useSelector((state) => state.auth);

  // Redux action 
  const dispatch = useDispatch();

  const gp = () => dispatch(getUserDataAction());

  useEffect(() => {
    gp();
  }, []);

  return (
    <div>
      <MainHeader history={props.history}  />
      <Profile
        name={user.firstname +" "+user.lastname}
        username={user.username}
        email={user.email}
      />
      <h3 style={{ marginLeft: "35px", marginTop: "20px" }}>My courses:</h3>
      <CourseList />
    </div>
  );
}

export default Home;
