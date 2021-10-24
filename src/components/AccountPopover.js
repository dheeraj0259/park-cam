import { useRef, useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import cogoToast from 'cogo-toast';
// material
import { alpha, styled } from '@mui/material/styles';
import { Button, Box, Divider, MenuItem, Typography, Avatar, IconButton } from '@mui/material';
import { Home, Person, Dashboard, Add, Remove, TrackChanges, Videocam, PhotoCamera } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
// components
import MenuPopover from './MenuPopover';
// services
import { getLoggedInUser, setLogInUser } from "../services/user";

import useAuth from "../utils/useAuth";

const MENU_OPTIONS = [
  {
    label: 'Home',
    icon: <Home sx={{
        mr: 2,
        width: 24,
        height: 24
      }} />,
    linkTo: '/'
  },
  {
    label: 'Profile',
    icon: <Person sx={{
        mr: 2,
        width: 24,
        height: 24
      }} />,
    linkTo: '/dashboard'
  },
  {
    label: 'Dashboard',
    icon: <Dashboard sx={{
        mr: 2,
        width: 24,
        height: 24
      }} />,
    linkTo: '/dashboard'
  },
  {
    label: 'Add Vehicle',
    icon: <Add sx={{
        mr: 2,
        width: 24,
        height: 24
      }} />,
    linkTo: '/dashboard'
  },
  {
    label: 'Delete Vehicle',
    icon: <Remove sx={{
        mr: 2,
        width: 24,
        height: 24
      }} />,
    linkTo: '/dashboard'
  },
  {
    label: 'View Registered vehicle logs',
    icon: <TrackChanges sx={{
        mr: 2,
        width: 24,
        height: 24
      }} />,
    linkTo: '/dashboard'
  },
  {
    label: 'View Live Video',
    icon: <Videocam sx={{
        mr: 2,
        width: 24,
        height: 24
      }} />,
    linkTo: '/dashboard'
  },
  {
    label: 'Shut Down Camera',
    icon: <PhotoCamera sx={{
        mr: 2,
        width: 24,
        height: 24
      }} />,
    linkTo: '/dashboard'
  },
];


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        border: '1px solid currentColor',
        content: '""',
      },
    },
  }));
// ----------------------------------------------------------------------

export default function AccountPopover() {
  const [userInfo, setLoggedInUser] = useState({});
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const { setUserAuthentication } = useAuth();

  useEffect(() => {
    getLoggedInUser().then(res => {
      setLoggedInUser(res.data);
    }).catch(err => console.error("Error getting logged in user: ", err));
    // to fix memory leaks while unmounting the component
    return () => {}
  }, [])

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleLogOut = () => {
    setLogInUser({}).then(res => {
      setUserAuthentication(false);
      const { hide } = cogoToast.success('Thank you for using our services.You have been successfully logged out.', { position: 'top-right', heading: 'Success', onClick: () => {
        hide();
      }, hideAfter: 4 });
    });
  }

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72)
            }
          })
        }}
      >
    <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar src={userInfo.gender === "female" ? "/static/woman.png" : "/static/man.png"} alt="photoURL" />
     </StyledBadge>   
      </IconButton>

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ width: 258, borderRadius: 2 }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle1" noWrap>
            {userInfo?.firstName} {userInfo?.lastName}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {userInfo?.id}
          </Typography>
        </Box>

        <Divider sx={{ my: 1 }} />

        {MENU_OPTIONS.map((option) => (
          <MenuItem
            key={option.label}
            to={option.linkTo}
            component={RouterLink}
            onClick={handleClose}
            sx={{ typography: 'body2', py: 1, px: 2.5 }}
          >
            {option.icon}
            {option.label}
          </MenuItem>
        ))}

        <Box sx={{ p: 2, pt: 1.5 }}>
          <Button fullWidth color="inherit" variant="outlined" onClick={handleLogOut}>
            Logout
          </Button>
        </Box>
      </MenuPopover>
    </>
  );
}
