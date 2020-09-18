import React from 'react'
import Navbar from "./navbar/Navbar";
import { Button, Typography } from "@material-ui/core";


export default function Home() {
 return (
   <div className="headerContainer">
     <Navbar />
     <div className="landingPageText">
       <Typography variant="subtitle1" gutterBottom>
         subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Quos blanditiis tenetur
       </Typography>
       <Button variant="contained" color="secondary">
         Layout
       </Button>
       <Button variant="outlined" color="secondary">
         Learn more
       </Button>
     </div>
   </div>
 );
}
