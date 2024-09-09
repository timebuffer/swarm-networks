import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductPreview = ({ title, description, link }) => {
  return (
    <Card elevation={3} style={{ marginBottom: '20px' }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" component={Link} to={link}>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductPreview;
