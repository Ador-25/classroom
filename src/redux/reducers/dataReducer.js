import { getTeacherCourses, getStudentCourses, JOIN_CLASS } from "../types";

const initialState = {
  courses: [],
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case JOIN_CLASS: 
      return {
        ...state,
        courses: [...state.courses, payload]
      };
    case getTeacherCourses:
      return {
        ...state,
        courses: [...payload],
      };

    case getStudentCourses:
      return {
        ...state,
        courses: [...payload],
      };
    default:
      return { ...state };
  }
}
