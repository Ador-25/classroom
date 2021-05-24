import React, { useEffect, useState } from "react";
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
import axios from "axios";
// Redux things
import { Provider } from "react-redux";
import store from "./redux/store";

// Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const getData = async (setState) => {
  try {
    const res = await axios.get("http://localhost:4000/hello");
    console.log(res.data);
    setState(res.data);
  } catch (err) {
    console.log(err);
  }
};

// If user is logged in 
const token = localStorage.token;
if (token) axios.defaults.headers.common['Authorization'] = token;


const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData(setData);
  }, []);

  return (
    <div>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/courses" component={CourseList} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/me" component={Profile} />
            <Route exact path="/classroom" component={Classroom} />     
          </Switch>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
