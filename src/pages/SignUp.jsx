import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@mui/material';
import Typography from '../components/Typography';

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
              defaultValue="Hello World"
              />
          </Grid>
          <Grid item xs={12} sm={6}>
             <TextField
              required
              id="outlined-required"
              label="Last name"
              defaultValue="Hello World"
              />
          </Grid>
        </Grid>
        <TextField
          required
          id="outlined-required"
          label="Email"
          defaultValue="Hello World"
          />
             <TextField
             fullWidth
              required
              id="outlined-required"
              name="password"
              label="Password"
              defaultValue="Hello World"
              />
      </Box>
      )
  }

  return (
    <Container style={{ marginTop: 100 }} >
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
          <Typography variant="body2" align="center">
            <Link href="/sign-in/" underline="always">
              Already have an account?
            </Link>
          </Typography>
        {renderForm()}
        </Paper>
        </Box>
        </Container>
        </Box>
    </Container>
  );
}

export default SignUp;
