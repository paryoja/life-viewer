import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Box } from '@material-ui/core';

// const useStyles = makeStyles(() => ({
//   root: {},
// }));

const TopBar: React.FC = () => {
  //   const classes = useStyles();

  return (
    <AppBar elevation={0}>
      <Toolbar>
        <RouterLink to='/'>Logo</RouterLink>
        <Box />
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
