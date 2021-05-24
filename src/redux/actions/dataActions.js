import axios from "axios";
import { getTeacherCourses, getStudentCourses, JOIN_CLASS } from "../types";

export const getCourses = () => async (dispatch) => {
  try {
    console.log("Function called");
    const userName = localStorage.userName;
    const role = localStorage.role;
    const route = role === "teacher" ? "clt" : "cls";

    const res = await axios.post(`http://localhost:4000/${route}`, {
      userName,
    });

    role === "teacher"
      ? dispatch({
          type: getTeacherCourses,
          payload: res.data.data,
        })
      : dispatch({
          type: getStudentCourses,
          payload: res.data.data,
        });

    console.log(res.data.data);
  } catch (err) {
    alert("Something went wront");
  }
};

// You can write as many functions as you want
export const joinClass = (classKey) => async (dispatch) => {
  try {
    console.log('Attempted join class');
    const userName = localStorage.userName;
    const res = await axios.post("http://localhost:4000/joinClass", { userName, courseID: classKey });
    dispatch({
      type: JOIN_CLASS,
      payload: { course_courseID: classKey },
    });
  } catch (err) {
    alert("Something went wrong");
  }
};
