import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@mui/material';
import { motion } from 'framer-motion';

import Typography from '../components/Typography';
import Button from '../components/Button';
import { MotionContainer, varBounceIn } from '../components/animate';

function SignUp() {
  const [sent, setSent] = React.useState(false);

  const handleSubmit = () => {
    setSent(true);
  };

  const renderForm = () => {
      return (
        <Box component="form" noValidate sx={{ mt: 6 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
             <TextField
              required
              id="outlined-required"
              label="First name"
              color="warning"
              />
          </Grid>
          <Grid item xs={12} sm={6}>
             <TextField
              required
              id="outlined-required"
              label="Last name"
              color="warning"
              />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
                fullWidth
                required
                id="outlined-required"
                label="Email"
                color="warning"
            />
          </Grid>
          <Grid item xs={12} sm={12}>
          <TextField
             fullWidth
              required
              color="warning"
              id="outlined-required"
              name="password"
              label="Password"
              />
          </Grid>
          <Grid style={{ display: "flex", alignItems: "center", justifyContent: "center" }} item xs={12} sm={12}>
          <motion.div variants={varBounceIn}>
            <Button
                color="warning"
                variant="contained"
                size="large"
                component="a"
                href="/sign-up/"
                sx={{ minWidth: 200, mt: 3, mb: 2 }}
            >
             SIGN UP
            </Button>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
      )
  }

  return (
    <Container style={{ marginTop: 100 }} >
    <MotionContainer initial="initial" open>
    <Box
      sx={{
        display: 'flex',
        backgroundImage: 'url(/static/appCurvyLines.png)',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ mt: 7, mb: 12 }}>
          <Paper
            background="light"
            sx={{ py: { xs: 4, md: 8 }, px: { xs: 3, md: 6 } }}
          >
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Sign Up
          </Typography>
          <Typography sx={{ mt: 3 }} variant="body2" align="center">
            <Link color="error" href="/sign-in/" underline="always">
              Already have an account?
            </Link>
          </Typography>
        {renderForm()}
        </Paper>
        </Box>
        </Container>
        </Box>
        </MotionContainer>
    </Container>
  );
}

export default SignUp;
