import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./ClassTab.css";

export default function ClassTab(props) {
  var myArray = ["back", "back1", "back2", "back4", "back3"];

  var randomCss = myArray[Math.floor(Math.random() * myArray.length)];

  return (
    <div className={randomCss}>
      <Link
        to="/classroom"
        variant="body2"
        style={{
          color: "white",
          fontSize: "20px",
          fontWeight: "bold",
          marginLeft: "8px",
          marginTop: "12px",
        }}
      >
        {props.name}
      </Link>
      <p style={{ color: "white", marginLeft: "8px" }}> {props.description}</p>
    </div>
  );
}
