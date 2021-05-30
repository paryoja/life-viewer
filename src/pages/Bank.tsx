import { Box, Grid, List, ListItem, Typography } from '@material-ui/core';
import { gql, useQuery } from '@apollo/client';

import AccountList from 'components/Bank/AccountList';
import { BankNode } from 'interfaces/finance';
import React from 'react';

const ALL_BANKS = gql`
  query banks {
    allBanks {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;

const Bank: React.FC = () => {
  const { loading, error, data } = useQuery(ALL_BANKS);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  const allBanks = data.allBanks.edges.map(
    ({ node }: BankNode, index: number) => {
      return (
        <ListItem
          button
          key={node.id}
          selected={selectedIndex === index}
          onClick={(event) => handleListItemClick(event, index)}
        >
          {node.name}
        </ListItem>
      );
    }
  );
  const selectedBank = data.allBanks.edges[selectedIndex].node;

  return (
    <Grid container>
      <Grid item lg={1} md={6} sm={6}>
        <Box sx={{ m: 3 }}>
          <Typography variant='h2'>은행 선택</Typography>
        </Box>
        <List component='nav' aria-label='main mailbox folders'>
          {allBanks}
        </List>
      </Grid>
      <Grid item lg={11} md={6} sm={6}>
        <AccountList {...selectedBank} />
      </Grid>
    </Grid>
  );
};

export { Bank as default };
