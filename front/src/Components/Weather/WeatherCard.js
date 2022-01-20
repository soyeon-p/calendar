import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { weatherValueState } from '../../Recoil/atoms';
import { useStyles } from '../../Styles/styles';

const WeatherCard = ({ weatherData }) => {
  const { tm } = weatherData;
  const weatherValue = useRecoilValue(weatherValueState);
  const classes = useStyles();

  return (
    <Grid item>
      <Card className={classes.card}>
        <CardHeader title={tm} />
        <CardContent>
          <Typography>{weatherData[weatherValue.temperature]}°C</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default WeatherCard;
