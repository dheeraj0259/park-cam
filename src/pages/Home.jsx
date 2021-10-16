import React from "react";
import Grid from '@mui/material/Grid';
import Navbar from "../components/Navbar";
import ProductInfo from "../views/ProductInfo";
import ProductServices from "../views/ProductServices";

const Home = () => {
    return (
        <Grid container>
            {/* <Grid item xs={12}>
           <Navbar />
           </Grid> */}
           <Grid item xs={12}>
           <ProductInfo />
           </Grid>
           <Grid item xs={12}>
           <ProductServices />
           </Grid>
        </Grid>
    )
};

export default Home;