import React, { useState } from "react";
import PropTypes from "prop-types";
import ClassHeader from "./AppBar/ClassHeader";
import "./Classroom.css";
import Post from "./Post";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
// Router 
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "",
    },
  },
}));

function Classroom({ history }) {
  const classes = useStyles();

  const { courseID } = useParams();
  console.log(courseID);
  return (
    <div>
      <ClassHeader history={history} />
      <div className="classroomBackground">
        <p>Class Info will come here</p>
        <TextField
          id="outlined-basic"
          label="Create post"
          variant="outlined"
          style={{ width: "100%" }}
        />
        <Post
          postedBy="John"
          content="Today's class will take place on March 08,2021"
        />
        <Post postedBy="Ador" content="asssdfsdf" />
      </div>
    </div>
  );
}

Classroom.propTypes = {};

export default Classroom;
