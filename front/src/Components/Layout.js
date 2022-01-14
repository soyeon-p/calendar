import React from 'react';
import { useStyles } from '../Styles/styles';
import Appbar from './Appbar';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Appbar />
      <Navbar />
      <div className={classes.component}>
        <div className={classes.offset}></div>
        <div className={classes.page}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
