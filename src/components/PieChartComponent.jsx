import React from 'react';
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { Paper, Box, Typography } from '@mui/material';

const PieChartComponent = ({ data }) => {
  // Define an array of colors for the pie chart segments
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF6666', '#66CCCC', '#FFD700', '#7FFF00', '#40E0D0'];

  return (
    <Paper>
      <Box p={2}>
        <Typography variant="h6">Price Range Distribution</Typography>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={150}
              label
              dataKey="count"
              nameKey="range"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
};

export default PieChartComponent;
