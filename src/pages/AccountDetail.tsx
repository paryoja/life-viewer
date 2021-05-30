import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import { gql, useQuery } from '@apollo/client';

import React from 'react';
import { TransactionNode } from 'interfaces/finance';
import { format } from 'date-fns';
import { useParams } from 'react-router-dom';

const ALL_TRANSACTIONS = gql`
  query ($accountID: ID!) {
    allTransactions(account: $accountID) {
      edges {
        node {
          id
          balance
          balanceCurrency
          transactionType
          createdAt
          transactionFromAmount
          transactionFromAmountCurrency
        }
      }
    }
    account(id: $accountID) {
      accountNumber
      description
    }
  }
`;

const AccountDetailView: React.FC = () => {
  const { accountID } = useParams();
  const { loading, error, data } = useQuery(ALL_TRANSACTIONS, {
    variables: { accountID },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const transactions = data.allTransactions.edges;
  const { account } = data;
  const tableRows = transactions.map(({ node }: TransactionNode) => {
    return (
      <TableRow key={node.id}>
        <TableCell>
          {format(Date.parse(node.createdAt), 'MMMM do, yyyy H:mma')}
        </TableCell>
        <TableCell>{node.transactionType}</TableCell>
        <TableCell>
          {node.transactionFromAmount.toLocaleString()}{' '}
          {node.transactionFromAmountCurrency}
        </TableCell>
        <TableCell>
          {node.balance} {node.balanceCurrency}
        </TableCell>
      </TableRow>
    );
  });

  return (
    <Box m={3}>
      <Typography variant='h1'>계좌 내역: {account.accountNumber}</Typography>
      <Typography variant='h1'>{account.description}</Typography>
      <TableContainer>
        <Table aria-label='transaction table'>
          <TableHead>
            <TableRow>
              <TableCell>DateTime</TableCell>
              <TableCell>거래내용</TableCell>
              <TableCell>거래금액</TableCell>
              <TableCell>잔액</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{tableRows}</TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AccountDetailView;
