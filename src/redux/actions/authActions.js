import axios from "axios";
import {
  LOGIN_Student,
  LOGIN_Teacher,
  signUpStudent,
  signUpTeacher,
  setUser,
  logOut
} from "../types";

// get current user data
export const getUserDataAction = () => async (dispatch) => {
  try {
    const userName = localStorage.userName;
    const role = localStorage.role;
    const res = await axios.post("http://localhost:4000/getProfile", {
      userName,
      role,
    });
    dispatch({ type: setUser, payload: res.data });
    console.log(res.data);
  } catch (err) {
    console.log(err.response.data);
  }
};

// Log user
export const loginUser = (loginData, history, teacher) => async (dispatch) => {
  try {
    const res = teacher
      ? await axios.post("http://localhost:4000/loginTeacher", loginData)
      : await axios.post("http://localhost:4000/loginStudent", loginData);
    console.log(res.data);
    localStorage.setItem("userName", res.data.user.username);
    const role = teacher ? "teacher" : "student";
    localStorage.setItem("role", role);

    teacher
      ? dispatch({
          type: LOGIN_Teacher,
          payload: res.data,
        })
      : dispatch({
          type: LOGIN_Student,
          payload: res.data,
        });

    console.log(res.data);
    history.push("home");
  } catch (err) {
    console.log("Something went wrong");
  }
};

// You can write as many functions as you want
export const signUpUserAction =
  (userData, teacher, history) => async (dispatch) => {
    try {
      console.log("Called");
      const res = teacher
        ? await axios.post("http://localhost:4000/signupTeacher", {
            ...userData,
            studentid: null,
          })
        : await axios.post("http://localhost:4000/signupStudent", {
            ...userData,
          });

      console.log(res.data);

      teacher
        ? dispatch({
            type: signUpStudent,
            payload: res.data,
          })
        : dispatch({
            type: signUpTeacher,
            payload: res.data,
          });
      history.push("/");
    } catch (err) {
      window.alert("Something went wrong");
    }
  };


// Logout 
export const logoutAction = (history) => async dispatch => {
  try {
    dispatch({
      type: logOut, 
      payload: null
    })
    localStorage.removeItem('userName');
    localStorage.removeItem('role');
    history.push('/');
  } catch (err) {
    alert('Something went wrong');
  }
}