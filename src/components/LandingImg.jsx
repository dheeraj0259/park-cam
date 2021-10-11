import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function LandingImg() {
  return (
    <Card sx={{ width: "100%", height: "100vh" }}>
    <CardMedia
        sx={{ height: "94vh" }}
        component="img"
        image="/static/landing.jpg"
        alt="green iguana"
      />
      <CardContent>
      <Typography variant="h6" color="text.secondary">
            Park Camera processing provides services to process video input and identify vehicle number plate 
        </Typography>
      </CardContent>
    </Card>
  );
}