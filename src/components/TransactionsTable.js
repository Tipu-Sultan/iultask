import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Button } from '@mui/material';

const TransactionsTable = ({ transactions, page, setPage }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Sold</TableCell>
            <TableCell>Date of Sale</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>{transaction.title}</TableCell>
              <TableCell>{transaction.description}</TableCell>
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
