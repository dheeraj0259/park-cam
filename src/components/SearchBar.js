import { useState } from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '@mui/icons-material/Search';
// material
import { styled, alpha } from '@mui/material/styles';
import {
  Input,
  Slide,
  Button,
  InputAdornment,
  ClickAwayListener,
  Stack
} from '@mui/material';

// ----------------------------------------------------------------------

const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const SearchbarStyle = styled('div')(({ theme }) => ({
  top: 0,
  left: 0,
  zIndex: 99,
  width: '100%',
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  height: APPBAR_MOBILE,
  backdropFilter: 'blur(50px)',
  WebkitBackdropFilter: 'blur(50px)', // Fix on Mobile
  padding: theme.spacing(0, 3),
  boxShadow: theme.customShadows.z8,
  backgroundColor: `${alpha(theme.palette.background.default, 0.72)}`,
  [theme.breakpoints.up('md')]: {
    height: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5)
  }
}));

// ----------------------------------------------------------------------

Searchbar.propTypes = {
  filter: PropTypes.func.isRequired
};

export default function Searchbar({filter}) {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div>
        <Stack
          direction="row"
          flexWrap="wrap-reverse"
          alignItems="center"
          justifyContent="flex-end"
        >
        {!isOpen && (
            <Button variant="contained" color="warning" startIcon={<SearchIcon />} onClick={handleOpen}>
              Search
            </Button>
        )}
        </Stack>

        <Slide direction="down" in={isOpen} mountOnEnter unmountOnExit>
          <SearchbarStyle style={{ marginTop: 100, backgroundColor: "#fbb5031f" }}>
            <Input
              autoFocus
              fullWidth
              disableUnderline
              placeholder="Search…"
              onChange={(event) => filter(event.target.value)}
              startAdornment={
                <InputAdornment position="start">
                    <SearchIcon sx={{ color: 'text.disabled', width: 20, height: 20 }} />
                </InputAdornment>
              }
              sx={{ mr: 1, fontWeight: 'fontWeightBold' }}
            />
            <Button variant="contained" color="warning" onClick={handleClose}>
              Search
            </Button>
          </SearchbarStyle>
        </Slide>
      </div>
    </ClickAwayListener>
  );
}
