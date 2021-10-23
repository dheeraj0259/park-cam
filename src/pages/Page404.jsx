import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Box, Button, Typography, Container } from '@mui/material';
// components
import { MotionContainer, varBounceIn } from '../components/animate';

// ----------------------------------------------------------------------

const RootStyle = {
  display: 'flex',
  minHeight: '100%',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
};

// ----------------------------------------------------------------------

export default function Page404() {
  return (
      <Container style={RootStyle}>
        <MotionContainer initial="initial" open>
          <Box sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center' }}>
            <motion.div variants={varBounceIn}>
              <Typography variant="h3" paragraph>
                Sorry, page not found!
              </Typography>
            </motion.div>
            <Typography sx={{ color: 'text.secondary' }}>
              Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL?
              Be sure to check your spelling.
            </Typography>

            <motion.div variants={varBounceIn}>
              <Box
                component="img"
                src="/static/illustration_404.svg"
                sx={{ height: 260, mx: 'auto', my: { xs: 5, sm: 10 } }}
              />
            </motion.div>

            <Button to="/" size="large" color="warning" variant="contained" component={RouterLink}>
              Go to Home
            </Button>
          </Box>
        </MotionContainer>
      </Container>
  );
}
