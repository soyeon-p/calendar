import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from '../../Styles/styles';

const Filter = () => {
  const classes = useStyles();
  
  return (
    <Box className={classes.box}>
      <Typography variant="subtitle1">2022-01-15</Typography>
      <Typography variant="h5">Weather</Typography>
      <div className={classes.filter}>
      </div>
    </Box>
  );
}

export default  Filter;