import React from "react";
import "./MainHeader.css";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
// Redux
import {logoutAction} from "../../redux/actions/authActions"
import {useDispatch} from "react-redux"

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
function ClassHeader({history}) {
  const dispatch = useDispatch();

  const logout = history => dispatch(logoutAction(history));
  const logUserOut = () => {
    logout(history);
  }

  const classes = useStyles();
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
          <Button onClick={() => logUserOut()} color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ClassHeader;
