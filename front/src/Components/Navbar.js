import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from '../Styles/styles';

const listItem = ['Home', 'Weather', 'Corona', 'Dust'];

const Navbar = () => {
  const classes = useStyles();
  return (
    <Drawer className={classes.drawer} variant="permanent" anchor="left">
      <List className={classes.drawerList}>
        {listItem.map((text) => (
          <ListItem key={text}>
            <Link to={`/${text}`} className={classes.link}>
              <ListItemText  primary={text} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Navbar;
