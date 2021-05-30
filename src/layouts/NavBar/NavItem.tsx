import { ListItem } from '@material-ui/core';
import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';

interface NavItemType {
  title: string;
  path: string;
}

const NavItem: React.FC<NavItemType> = ({ title, path }: NavItemType) => {
  // const location = useLocation();
  // const active = path
  //   ? !!matchPath(
  //       {
  //         path,
  //         end: false,
  //       },
  //       location.pathname
  //     )
  //   : false;

  return (
    <ListItem
      disableGutters
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        p: 2,
      }}
    >
      <RouterLink to={path}>
        <span>{title}</span>
      </RouterLink>
    </ListItem>
  );
};

export default NavItem;
