import React from "react";
import Grid from '@mui/material/Grid';
import ProductInfo from "../views/ProductInfo";
import ProductServices from "../views/ProductServices";
import Footer from "../components/Footer";
import ServiceList from "../components/ServiceList";

import useAuth from "../utils/useAuth"

const Home = () => {
    const { isUserAuthenticated } = useAuth();
    return (
        <Grid container>
           <Grid style={{ marginTop: "11vh" }} item xs={12}>
           <ProductInfo />
           </Grid>
           { !isUserAuthenticated && <Grid item xs={12}>
           <ProductServices />
           </Grid> }
           { isUserAuthenticated && <Grid style={{ backgroundColor: "#fbb5031f" }} item xs={12}>
           <ServiceList />
           </Grid> }
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