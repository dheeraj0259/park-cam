import React from "react";
import Grid from '@mui/material/Grid';
import Navbar from "../components/Navbar";
import LandingContent from "../components/LandingContent";

const Home = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
           <Navbar />
           </Grid>
           <Grid item style={{ margin: "100px 0 0 50px" }} xs={12}>
           <LandingContent />
           </Grid>
        </Grid>
    )
};

export default Home;