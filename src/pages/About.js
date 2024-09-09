import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const About = () => {
  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h3" gutterBottom>
          About This Platform
        </Typography>
        <Typography variant="body1">
          This platform is dedicated to providing educational resources on the topics of the Internet of Things and
          Communication Science. Learn about cutting-edge technologies that are reshaping the world and how
          communication networks enable these innovations.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
