import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
// material
import { alpha } from '@mui/material/styles';
import { Button, Box, Divider, MenuItem, Typography, Avatar, IconButton } from '@mui/material';
// components
import MenuPopover from './MenuPopover';

// ----------------------------------------------------------------------

const account = {
    displayName: 'Jaydon Frankie',
    email: 'demo@minimals.cc',
    photoURL: '/static/mock-images/avatars/avatar_default.jpg'
  };

const MENU_OPTIONS = [
  {
    label: 'Home',
    icon: <HomeIcon sx={{
        mr: 2,
        width: 24,
        height: 24
      }} />,
    linkTo: '/'
  },
  {
    label: 'Profile',
    icon: <PersonIcon sx={{
        mr: 2,
        width: 24,
        height: 24
      }} />,
    linkTo: '#'
  },
  {
    label: 'Settings',
    icon: <SettingsIcon sx={{
        mr: 2,
        width: 24,
        height: 24
      }} />,
    linkTo: '#'
  }
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

export default function AccountPopover({ userInfo }) {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
        <Avatar src="/static/man.png" alt="photoURL" />
     </StyledBadge>   
      </IconButton>

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ width: 220 }}
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
          <Button fullWidth color="inherit" variant="outlined">
            Logout
          </Button>
        </Box>
      </MenuPopover>
    </>
  );
}

AccountPopover.propTypes = {
    userInfo: PropTypes.object.isRequired,
}
