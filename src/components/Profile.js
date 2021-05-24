import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Im from "./Pic/Messi.jpg";
import { Link } from "@material-ui/core";
import "./Profile.css";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function Profile(props) {
  return (
    <div style={{ display: "flex" }}>
      <div className="parent">
        <div style={{ display: "flex", marginTop: "20px", width: "200px" }}>
          <Avatar
            alt={props.name}
            src="/Pic/index.jpg"
            style={{ height: "100px", width: "100px" }}
          />

          <Link>
            <p style={{ marginTop: "70px", fontWeight: "Bold" }}>
              {props.username}
            </p>
          </Link>
        </div>
        <div style={{ width: "300px", display: "", gap: "15px" }}>
          <p>{props.name}</p>
          <p>{props.id}</p>

          <p>
            Due Works: <Link>{6}</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
