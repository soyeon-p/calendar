import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { useStyles } from '../../Styles/styles';

const WeatherCard = ({ weatherData }) => {
  const {tm, avgTa} = weatherData
  const classes = useStyles();

  return (
    <Grid item>
      <Card className={classes.card}>
        <CardHeader title={tm} />
          <CardContent>
            <Typography>{avgTa}</Typography>
          </CardContent>
      </Card>
    </Grid>
  );
};

export default WeatherCard;
