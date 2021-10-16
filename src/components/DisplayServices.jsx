import React from "react";
import { string } from "prop-types";
import { Box, Link, Button, Drawer, Typography, Avatar, Stack } from '@mui/material';
// material
import { styled } from '@mui/material/styles';


const AccountStyle = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2, 2.5),
    borderRadius: theme.shape.borderRadiusSm,
    backgroundColor: "#fbb5031f",
    width: 400
  }));

const DisplayServices = (props) => {
    const { name, image } = props;
    return (
        <Box sx={{ mb: 5, mx: 2.5 }} elevation={10}>
          <AccountStyle>
            <Avatar src={image} alt="photoURL" />
            <Box sx={{ ml: 2 }}>
              <Typography variant="h6" sx={{ color: 'text.primary' }}>
                {name}
              </Typography>
            </Box>
          </AccountStyle>
      </Box>
    )
};

DisplayServices.propTypes = {
    name: string.isRequired,
    image: string.isRequired,
}

export default DisplayServices;