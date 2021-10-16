import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function LandingImg() {
  return (
    <Card sx={{ width: "100%", height: "100vh" }}>
    <CardMedia
        sx={{ height: "100vh" }}
        component="img"
        image="/static/landing.jpg"
        alt="green iguana"
      />
    </Card>
  );
}