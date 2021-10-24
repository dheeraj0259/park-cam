import React from "react";
import Grid from '@mui/material/Grid';
import ProductInfo from "../views/ProductInfo";
import ProductServices from "../views/ProductServices";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <Grid container>
           <Grid style={{ marginTop: "11vh" }} item xs={12}>
           <ProductInfo />
           </Grid>
           <Grid item xs={12}>
           <ProductServices />
           </Grid>
           <Grid item xs={12}>
           <Footer
            title="📇 Contact Us"
            description="📧 Email: parkcam@gmail.com | 📞 Phone: ##########"
            />
           </Grid>
        </Grid>
    )
};

export default Home;