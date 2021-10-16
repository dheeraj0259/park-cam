import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { OFFERED_SERVICES } from "../constant/services";
import DisplayServices from "./DisplayServices";

export default function LandingContent() {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Card sx={{ maxWidth: 500 }}>
        <CardMedia
            component="img"
            image="/static/landing.jpg"
            alt="park cam"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Park Cam
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Park cam provides services in identifying incoming and ongoing vehicle licence plate
            </Typography>
        </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
          <Grid container direction="column" columns={{ xs: 4, sm: 8, md: 12 }}>
              {
                  OFFERED_SERVICES.map(service => {
                      return (<DisplayServices name={service.name} image={service.image} />)
                  })
              }
          </Grid>
      </Grid>
    </Grid>  
  );
}