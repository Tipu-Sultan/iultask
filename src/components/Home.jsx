import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Container, Typography, Box, Button } from '@mui/material';
import ProductCard from './ProductCard';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_HOST}/api/transactions`, {
        params: {page },
      });
      setProducts(response.data.transactions);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Featured Products
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="space-between" m={2}>
        <Button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </Button>
        <Button
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
