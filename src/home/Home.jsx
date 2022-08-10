import React from 'react'
import Navbar from "./navbar/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, Paper, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: "7% 15%",
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  buttonContained: {
    margin: '3%',
  }
}));


export default function Home() {
  const classes = useStyles();

 return (
   <div className="headerContainer">
     <Navbar />
     <Grid item xs={8}>
       <Paper elevation={0} className={classes.paper}>
         <div className="landingPageText">
           <Typography variant="h2" gutterBottom>
             QUICK START YOUR NEXT WEB PROJECT
           </Typography>
           <Button
             variant="contained"
             color="secondary"
             href="layout"
             className={classes.buttonContained}
           >
             Layout
           </Button>
           <Button
             variant="outlined"
             color="secondary"
             href="about"
             className={classes.buttonOutlined}
           >
             Learn more
           </Button>
         </div>
       </Paper>
     </Grid>
   </div>
 );
}
