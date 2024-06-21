import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';

const Statistics = ({ statistics }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={4}>
        <Paper>
          <Box p={2}>
            <Typography variant="h6">Total Sale Amount</Typography>
            <Typography variant="h4">{statistics.totalSaleAmount || 0}</Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper>
          <Box p={2}>
            <Typography variant="h6">Total Sold Items</Typography>
            <Typography variant="h4">{statistics.totalSoldItems || 0}</Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper>
          <Box p={2}>
            <Typography variant="h6">Total Not Sold Items</Typography>
            <Typography variant="h4">{statistics.totalNotSoldItems || 0}</Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Statistics;
