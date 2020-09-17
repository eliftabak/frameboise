import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  "@global": {
    ".MuiAppBar-root": {
      background: "transparent",
      boxShadow: "none",
    }
  },
  title: {
    flexGrow: 1,
    marginLeft: "100px",
    color: 'pink',
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
