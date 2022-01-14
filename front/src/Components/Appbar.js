import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import { useStyles } from '../Styles/styles';

const Appbar = () => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <AppBar className={classes.appbar}>
      <Toolbar>
        <Typography variant="h5">{`${location.pathname.slice(1)}`}</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
