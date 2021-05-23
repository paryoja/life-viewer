import React from 'react';
import { Box, Divider, Drawer, Typography } from '@material-ui/core';

const NavBar: React.FC = () => {
  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          p: 2,
        }}
      >
        <Typography color='textPrimary' variant='h5'>
          NavBar
        </Typography>
      </Box>
      <Divider />
      Hi
      <Divider />
      Hi
      <Divider />
      Hi
      <Divider />
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
