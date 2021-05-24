import React, {useEffect} from "react";
import ClassTab from "./ClassTab";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { getCourses } from "../redux/actions/dataActions";

export default function CourseList(props) {
  const { courses } = useSelector((state) => state.data);

  const dispatch = useDispatch();

  const gc = () => dispatch(getCourses());

  useEffect(() => {
    console.log('Component mounted');
    gc();
  }, []);

  return (
    <div style={{ display: "flex", marginLeft: "20px" }}>
      {courses.map(course => (
        <ClassTab name={course.coursename || course.course_courseID} description={course.description} />
      ))}
    </div>
  );
}
