import React from "react";
import Grid from '@mui/material/Grid';
import Navbar from "../components/Navbar";
import LandingImg from "../components/LandingImg";
import LandingContent from "../components/LandingContent";

const Home = () => {
    return (
        <Grid container>
            <Grid>
           <Navbar />
           </Grid>
           <Grid>
           <LandingContent />
           </Grid>
        </Grid>
    )
};

export default Home;