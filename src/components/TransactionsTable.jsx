import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Button } from '@mui/material';

const TransactionsTable = ({ transactions, page, setPage }) => {
  const [expandedDescription, setExpandedDescription] = useState({});

  const handleToggleDescription = (id) => {
    setExpandedDescription((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const truncateDescription = (description, id) => {
    if (expandedDescription[id] || description.length <= 30) {
      return description;
    }
    return `${description.slice(0, 30)}...`;
  };

  // Function to determine background color for table rows
  const getRowColor = (index) => {
    return index % 2 === 0 ? '#f0f0f0' : '#ffffff'; // Alternate row colors
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead style={{ backgroundColor: '#3f51b5', color: '#fff' }}>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Sold</TableCell>
            <TableCell>Date of Sale</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((transaction, index) => (
            <TableRow key={transaction.id} style={{ backgroundColor: getRowColor(index) }}>
              <TableCell>{transaction.title}</TableCell>
              <TableCell>
                {truncateDescription(transaction.description, transaction.id)}
                {transaction.description.length > 30 && (
                  <Button size="small" onClick={() => handleToggleDescription(transaction.id)}>
                    {expandedDescription[transaction.id] ? 'Less' : 'More'}
                  </Button>
                )}
              </TableCell>
              <TableCell>{transaction.price}</TableCell>
              <TableCell>{transaction.sold ? 'Yes' : 'No'}</TableCell>
              <TableCell>{new Date(transaction.dateOfSale).toLocaleDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
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
    </TableContainer>
  );
};

export default TransactionsTable;
