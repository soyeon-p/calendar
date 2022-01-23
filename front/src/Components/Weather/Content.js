import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { weatherDataState, weatherValueState } from '../../Recoil/atoms';
import WeatherCard from './WeatherCard';
import { temperatureList } from './WeatherList';

const Content = () => {
  const weatherData = useRecoilValue(weatherDataState);
  const weatherValue = useRecoilValue(weatherValueState);

  return (
    <>
      {weatherData ? (
        <>
          <Typography variant="h4" color="primary">
            {`${temperatureList.find((data) => data.value === weatherValue.temperature).title} (${
              weatherValue.cityName
            })`}
          </Typography>
          <Grid container spacing={3}>
            {weatherData.slice(0).reverse().map((weather) => (
              <WeatherCard key={weather.tm} weatherData={weather} />
            ))}
          </Grid>
        </>
      ) : <Typography variant='h3' color='primary'>Loading...</Typography>}
    </>
  );
};

export default Content;
