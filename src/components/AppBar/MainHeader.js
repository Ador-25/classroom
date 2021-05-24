import React from "react";
import "./MainHeader.css";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
// Redux
import { joinClass as joinClassAction } from "../../redux/actions/dataActions";
import { logoutAction } from "../../redux/actions/authActions";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function MainHeader({history}) {
  const dispatch = useDispatch();

  const jc = (courseKey) => dispatch(joinClassAction(courseKey));
  const logout = history => dispatch(logoutAction(history));

  const logUserOut = () => {
    logout(history);
  }

  function joinClass() {
    var code = prompt("Enter class code:");
    console.log(code);
    if (code !== undefined && code !== null ) jc(code);
  }
  const classes = useStyles();
  const role = localStorage.role;
  const disabled = role === 'student' ? true : false;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Home
          </Typography>

          <Button disabled={!disabled} color="inherit" onClick={joinClass}>
            Join Class
          </Button>
          <Button onClick={() => logUserOut()} color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
//
export default MainHeader;
