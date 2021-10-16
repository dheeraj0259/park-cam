import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function LandingContent() {
  return (
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
  );
}