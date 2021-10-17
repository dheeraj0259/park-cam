import { Login, AppRegistration } from '@mui/icons-material';

// material
import { alpha, styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton } from '@mui/material';
import "../styles/navbar.css";

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 0;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  backgroundColor: '#fbb5031f',
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
  return (
    <RootStyle>
      <ToolbarStyle>
        <IconButton href="/">
        <Logo />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
        <IconButton href="/sign-up">
        <AppRegistration fontSize="large" sx={{ color: "black" }} />
        </IconButton>
        <IconButton href="/sign-in">
        <Login fontSize="large" sx={{ color: "#ffb500" }} />
        </IconButton>
        </Stack>
      </ToolbarStyle>
    </RootStyle>
  );
}
