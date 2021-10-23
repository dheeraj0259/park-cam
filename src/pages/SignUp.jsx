import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Container, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import cogoToast from 'cogo-toast';
// components
import Typography from '../components/Typography';
import Button from '../components/Button';
import { MotionContainer, varBounceIn } from '../components/animate';
// services
import { getUsers, addUser } from "../services/user";

function SignUp() {
  const DEFAULT_ERR_STATE = {firstName: false, lastName: false, email: false, password: false};  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [inputErr, setInputErr] = useState(DEFAULT_ERR_STATE);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(res => {
      setUsers(res.data);
    }).catch(err => console.error("Error while getting users: ", err));
  }, [])

  const isValidEmail = () => {
    if(!email.includes("@") || !email.includes(".com")) return true;
    return false;
}

  const isEmailExisting = () => {
    const user = users.find(item => item.id === email);
    if(user) return true;
    return false;
}

  const handleSubmit = () => {
      const isInvalid = isMissingRequiredValues();
      let errState = DEFAULT_ERR_STATE;
      if(isInvalid) {
        if(!firstName) errState.firstName = true;
        if(!lastName) errState.lastName = true;
        if(!email) errState.email = true;
        if(email && isValidEmail()) errState.email = true;
        if(email && isEmailExisting()) errState.email = true;
        if(!password) errState.password = true;
        setInputErr(errState);
      } else {
        // set state changes
        setInputErr(errState);
        setLoading(true);
        // add user to db
        let result = { firstName, lastName, id: email, password, gender };
        addUser(result).then(res => {
          setTimeout(() => {
          const { hide } = cogoToast.success('Congratulations, your account has been successfully created.', { position: 'top-right', heading: 'Success',   onClick: () => {
            hide();
          }, hideAfter: 4 });
            setLoading(false)
          }, 2000);
        }).catch(err => {
          setLoading(false);
          cogoToast.error('Something went wrong, please refresh page and try again.', { position: 'top-right', heading: 'Error', hideAfter: 4 });
          console.error("Error while adding user: ", err);
        });
      }
  }

  const isMissingRequiredValues = () => {
      if(!firstName || !lastName || !email || !password || isValidEmail() || isEmailExisting()) return true;
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

  const getEmailErrorMsg = () => {
    if(inputErr["email"] && isValidEmail()) return "Invalid email (Please provide valid email address)";
    if(isEmailExisting()) return "Account already exists with this email. Please use different email."
    return "";
  }

  const renderForm = () => {
      return (
        <Box component="form" noValidate sx={{ mt: 6 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
             <TextField
              error={inputErr["firstName"]}
              required
              id="outlined-required"
              label="First name"
              color="warning"
              value={firstName}
              onChange={(event) => handleLocalState("firstName", event.target.value, setFirstName)}
              />
          </Grid>
          <Grid item xs={12} sm={4}>
             <TextField
              error={inputErr["lastName"]}
              required
              id="outlined-required"
              label="Last name"
              color="warning"
              value={lastName}
              onChange={(event) => handleLocalState("lastName", event.target.value, setLastName)}
              />
          </Grid>
          <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <InputLabel color="warning" id="demo-simple-select-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={gender}
              label="Gender"
              color="warning"
              onChange={(event) => setGender(event.target.value)}
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="">None</MenuItem>
           </Select>
      </FormControl>
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
                error={isEmailExisting() || inputErr["email"]}
                fullWidth
                required
                id="outlined-required"
                label="Email"
                color="warning"
                helperText={getEmailErrorMsg()}
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
                disabled={loading}
                sx={{ minWidth: 200, mt: 3, mb: 2 }}
                onClick={handleSubmit}
            >
             { loading ? "Loading..." : "SIGN UP" }
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
