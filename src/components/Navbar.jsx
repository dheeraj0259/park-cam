import React from 'react';
import { Login, AppRegistration } from '@mui/icons-material';

// material
import { alpha, styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton, Tooltip } from '@mui/material';

import AccountPopover from './AccountPopover';
import "../styles/navbar.css";

import useAuth from "../utils/useAuth";

const DRAWER_WIDTH = 0;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.default, 0.72),
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${DRAWER_WIDTH + 1}px)`
  }
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5)
  }
}));

const Logo = ({sx}) => {
    return <Box component="img" src="/static/video-camera.png" sx={{ width: 40, height: 40, ...sx }} />;
}

export default function Navbar() {
  const { isUserAuthenticated } = useAuth();

  console.log("Logged in: ", isUserAuthenticated);
  const renderLoggedOffActions = () => {
    return (
      <span>
      <Tooltip title="Sign Up">  
      <IconButton href="/sign-up">
      <AppRegistration fontSize="large" sx={{ color: "black" }} />
      </IconButton>
      </Tooltip>
      <Tooltip title="Sign In">
      <IconButton href="/sign-in">
      <Login fontSize="large" sx={{ color: "#ffb500" }} />
      </IconButton>
      </Tooltip>
      </span>
    )
  }

  const renderLoggedInActions = () => {
    return (
      <span>
      <AccountPopover />
      </span>
    )
  }
  return (
    <RootStyle>
      <ToolbarStyle>
        <IconButton href="/">
        <Logo />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
        {isUserAuthenticated ? renderLoggedInActions(): renderLoggedOffActions()}
        </Stack>
      </ToolbarStyle>
    </RootStyle>
  );
}
