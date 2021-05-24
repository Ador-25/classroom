import {
  TextField,
  Button,
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Checkbox,
} from "@material-ui/core";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import HeaderZero from "./AppBar/HeaderZero";
// React redux
import { useSelector, useDispatch } from "react-redux";
import { loginUser as loginUserAction } from "../redux/actions/authActions";
import {Link} from 'react-router-dom';

// const getData = async (setState) => {
//   try {
//     const res = await axios.get("http://localhost:4000/hello");
//     console.log(res.data);
//     setState(res.data);
//   } catch (err) {
//     console.log(err);
//   }
// };

const LoginPage = (props) => {
  const [data, setData] = useState([]);
  // useEffect(() => {
  //   getData(setData);
  // }, []);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [teacher, setTeacher] = useState(false);

  // Accessing redux data
  const auth = useSelector(
    (state) => state.auth
  );
  console.log(auth);

  // Accessing function
  const dispatch = useDispatch();

  const loginUser = (loginData, history, teacher) =>
    dispatch(loginUserAction(loginData, history, teacher));

  const handleSubmit = (e) => {
    e.preventDefault();
    const creds = { password, userName: name };

    loginUser(creds, props.history, teacher);
  };

  return (
    <div>
      <HeaderZero />
      <div style={{ margin: "auto", width: "180px" }}>
        <h2 style={{ textAlign: "center" }}>Sign in</h2>

        <div>
          <TextField
            value={name}
            id="standard-username-input"
            size="small"
            label="Username"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div>
          <TextField
            id="standard-password-input"
            size="small"
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <Button
          variant="outlined"
          size="small"
          color="black"
          href="#outlined-buttons"
          onClick={e => handleSubmit(e)}
          style={{ marginTop: "10px", width: "180px", textAlign: "center" }}
        >
          Sign in
        </Button>
        <div>
          <Checkbox
            onChange={() => setTeacher(!teacher)}
            checked={teacher}
            color="default"
            inputProps={{ "aria-label": "checkbox with default color" }}
          />
          Login as Teacher
        </div>

        <div style={{ marginTop: "10px" }}>
          {" "}
          Don't have an account?
          <Button href="#text-buttons" color="primary" component={Link} to="/signup">
            <div style={{ alignContent: "center" }}>Sign up</div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
