import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Communication = () => {
  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h3" gutterBottom>
          Communication Science
        </Typography>
        <Typography variant="body1">
          Communication Science explores the various ways in which information is transmitted between entities,
          whether it's through human conversation, data networks, or even animal communication. Dive deeper into
          how communication technologies underpin modern digital systems.
        </Typography>
      </Box>
    </Container>
  );
};

export default Communication;
