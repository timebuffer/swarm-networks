import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import ProductPreview from '../components/ProductPreview';

const Home = () => {
  return (
    
      <Container>
      <Box mt={4}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <ProductPreview
              title="What is IoT?"
              description="Learn how the Internet of Things (IoT) is transforming industries by connecting devices and enabling smarter systems."
              link="/iot"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <ProductPreview
              title="Communication Science"
              description="Explore the fundamental principles behind communication networks and how they power our digital world."
              link="/communication"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <ProductPreview
              title="Smart Homes"
              description="Discover how IoT is revolutionizing home automation through connected devices and smart systems."
              link="/smart-homes"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <ProductPreview
              title="5G Networks"
              description="Dive into the world of 5G and how it is driving the future of communication with faster, more reliable connectivity."
              link="/5g-networks"
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
    
  );
};

export default Home;
