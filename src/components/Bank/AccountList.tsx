import { AccountNode, Bank } from 'interfaces/finance';
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

import { Link } from 'react-router-dom';
import React from 'react';

const ALL_BANKS = gql`
  query accounts($bankId: ID) {
    allAccounts(bank: $bankId, isMine: true) {
      edges {
        node {
          id
          accountNumber
          isActive
          transactionAdded
        }
      }
    }
  }
`;

const AccountList: React.FC<Bank> = ({ name, id }: Bank) => {
  const { loading, error, data } = useQuery(ALL_BANKS, {
    variables: { bankId: id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const accounts = data.allAccounts.edges;
  return (
    <Box m={3}>
      <Typography variant='h1'>계좌 정보: {name}</Typography>
      <TableContainer>
        <Table aria-label='account table'>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography>계좌번호</Typography>
              </TableCell>
              <TableCell>
                <Typography>잔액</Typography>
              </TableCell>
              <TableCell>
                <Typography>활성</Typography>
              </TableCell>
              <TableCell>
                <Typography>업데이트 여부</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {accounts.map((account: AccountNode) => (
              <TableRow key={account.node.id}>
                <TableCell>
                  <Link to={`/account/${account.node.id}`}>
                    {account.node.accountNumber}
                  </Link>
                </TableCell>
                <TableCell>Balance</TableCell>
                <TableCell>{account.node.isActive ? '활성' : '해지'}</TableCell>
                <TableCell>
                  {account.node.transactionAdded ? '완료' : '업데이트 필요'}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AccountList;
