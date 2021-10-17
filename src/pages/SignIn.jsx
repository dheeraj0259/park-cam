import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@mui/material';
import { motion } from 'framer-motion';

import Typography from '../components/Typography';
import Button from '../components/Button';
import { MotionContainer, varBounceIn } from '../components/animate';

function SignIn() {
    const DEFAULT_ERR_STATE = {email: false, password: false};  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [inputErr, setInputErr] = useState(DEFAULT_ERR_STATE);
  
    const handleSubmit = () => {
        const isInvalid = isMissingRequiredValues();
        let errState = DEFAULT_ERR_STATE;
        if(isInvalid) {
          if(!email) errState.email = true;
          if(email && inValidEmail()) errState.email = true;
          if(!password) errState.password = true;
          setInputErr(errState);
        } else {
            let result = { email, password };
            console.log("Result: ", result);
        }
    }

    const inValidEmail = () => {
        if(!email.includes("@") || !email.includes(".com")) return true;
        return false;
    }

    const isMissingRequiredValues = () => {
        if(!email || !password || inValidEmail) return true;
        else return false;
    }

    const handleLocalState = (field, value, handler) => {
        if(!value) setInputErr(currentState => {
            return { ...currentState, [field]: true };
        }) 
    
        if(value) {
            setInputErr(currentState => {
                return { ...currentState, [field]: false };
            }) 
        }
        handler(value);
      };

  const renderForm = () => {
      return (
        <Box component="form" noValidate sx={{ mt: 6 }}>
        <Grid container spacing={2}>
          <Grid item sx={{ mb: 2 }} xs={12} sm={12}>
            <TextField
                error={inputErr["email"]}
                fullWidth
                required
                id="outlined-required"
                label="Email"
                color="warning"
                helperText={inputErr["email"] && inValidEmail() ? "Invalid email (Please provide valid email address)": ""}
                value={email}
                onChange={(event) => handleLocalState("email", event.target.value, setEmail)}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
          <TextField
              error={inputErr["password"]}
              fullWidth
              required
              color="warning"
              id="outlined-required"
              type="password"
              label="Password"
              value={password}
              onChange={(event) => handleLocalState("password", event.target.value, setPassword)}
              />
          </Grid>
          <Grid style={{ display: "flex", alignItems: "center", justifyContent: "center" }} item xs={12} sm={12}>
          <motion.div variants={varBounceIn}>
            <Button
                color="warning"
                variant="contained"
                size="large"
                sx={{ minWidth: 200, mt: 3, mb: 2 }}
                onClick={handleSubmit}
            >
             SIGN IN
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
            Sign In
          </Typography>
          <Typography sx={{ mt: 3 }} variant="body2" align="center">
            {'Not a member yet? '}
            <Link color="error" href="/sign-up/" align="center" underline="always">
            Sign Up here
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

export default SignIn;
