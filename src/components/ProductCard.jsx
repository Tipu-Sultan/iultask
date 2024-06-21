import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Button } from '@mui/material';

const ProductCard = ({ product }) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={product.image}
          alt={product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description.substring(0, 100)}...
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
            Price: ${product.price}
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Add to Cart
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
