import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  "@global": {
    ".MuiAppBar-root": {
      background: "transparent",
      boxShadow: "none",
    },
  },
  title: {
    flexGrow: 1,
    marginLeft: "10%",
    color: "#ff4081",
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Frameboise
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
