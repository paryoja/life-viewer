import { Box, Drawer, List } from '@material-ui/core';

import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import NavItem from 'layouts/NavBar/NavItem';
import React from 'react';

const NavItemList = [{ title: 'Bank', path: 'bank', Icon: AccountBalanceIcon }];

const NavBar: React.FC = () => {
  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <List>
        {NavItemList.map((elem, index) => {
          return <NavItem key={index} {...elem} />;
        })}
      </List>
    </Box>
  );

  return (
    <>
      <Drawer
        anchor='left'
        open
        variant='persistent'
        PaperProps={{
          sx: {
            width: 256,
            top: 64,
            height: 'calc(100% - 64px)',
          },
        }}
      >
        {content}
      </Drawer>
    </>
  );
};

export default NavBar;
