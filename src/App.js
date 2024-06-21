import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, TextField, MenuItem, Typography, Box, Button } from '@mui/material';
import TransactionsTable from './components/TransactionsTable';
import Statistics from './components/Statistics';
import BarChartComponent from './components/BarChartComponent';

const months = [
  { value: 1, label: 'January' },
  { value: 2, label: 'February' },
  { value: 3, label: 'March' },
  { value: 4, label: 'April' },
  { value: 5, label: 'May' },
  { value: 6, label: 'June' },
  { value: 7, label: 'July' },
  { value: 8, label: 'August' },
  { value: 9, label: 'September' },
  { value: 10, label: 'October' },
  { value: 11, label: 'November' },
  { value: 12, label: 'December' },
];

const App = () => {
  const [month, setMonth] = useState(3); // Default to March
  const [searchText, setSearchText] = useState('');
  const [page, setPage] = useState(1);
  const [transactions, setTransactions] = useState([]);
  const [statistics, setStatistics] = useState({});
  const [barChartData, setBarChartData] = useState([]);

  const fetchTransactions = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_HOST}/api/transactions`, {
        params: { month, searchText, page },
      });
      setTransactions(response.data.transactions);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  const fetchStatistics = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_HOST}/api/statistics`, { params: { month } });
      setStatistics(response.data);
    } catch (error) {
      console.error('Error fetching statistics:', error);
    }
  };

  const fetchBarChartData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_HOST}/api/bar-chart`, { params: { month } });
      setBarChartData(response.data);
    } catch (error) {
      console.error('Error fetching bar chart data:', error);
    }
  };

  useEffect(() => {
    fetchTransactions();
    fetchStatistics();
    fetchBarChartData();
  }, [month, searchText, page]);

  const handleSearch = (event) => {
    setSearchText(event.target.value);
    setPage(1); // Reset to first page on new search
  };

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Transactions Dashboard
        </Typography>
        <TextField
          select
          label="Select Month"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          variant="outlined"
          margin="normal"
          fullWidth
        >
          {months.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Search Transactions"
          value={searchText}
          onChange={handleSearch}
          variant="outlined"
          margin="normal"
          fullWidth
        />
      </Box>
      <TransactionsTable transactions={transactions} page={page} setPage={setPage} />
      <Box my={4}>
        <Statistics statistics={statistics} />
      </Box>
      <Box my={4}>
        <BarChartComponent data={barChartData} />
      </Box>
    </Container>
  );
};

export default App;
