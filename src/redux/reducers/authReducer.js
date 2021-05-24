import {
  LOGIN_Student,
  LOGIN_Teacher,
  signUpTeacher,
  signUpStudent,
  setUser,
  logOut
} from "../types";

const initialState = {
  authenticated: false,
  role: "guest",
  error: {},
  user: {},
  msg: "",
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case logOut: 
      return {
        ...state, 
        user: {},
        role: 'guest'
      }
    case setUser: 
      return {
        ...state, 
        authenticated: true,
        user: payload.user,
        role: payload.role
      }
    case signUpStudent:
      return {
        ...state,
        msg: payload.msg,
      };

    case signUpTeacher:
      return {
        ...state,
        msg: payload.msg,
      };

    case LOGIN_Student:
      return {
        ...state,
        authenticated: true,
        role: "student",
        user: payload.user,
      };

    case LOGIN_Teacher:
      return {
        ...state,
        authenticated: true,
        role: "teacher",
        user: payload.user,
      };

    default:
      return { ...state };
  }
}
