import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Iot = () => {
  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h3" gutterBottom>
          Internet of Things (IoT)
        </Typography>
        <Typography variant="body1">
          The Internet of Things (IoT) is transforming industries by connecting devices, allowing for real-time
          data exchange, and enabling smarter systems. Learn more about how IoT is used in smart homes, healthcare, transportation, and more.
        </Typography>
      </Box>
    </Container>
  );
};

export default Iot;
