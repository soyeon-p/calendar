import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { weatherDataState } from '../../Recoil/atoms';
import WeatherCard from './WeatherCard';

const Content = () => {
  const weatherData = useRecoilValue(weatherDataState);
  console.log(weatherData);

  return (
    <>
      {weatherData && (
        <>
          <Typography variant="h4" color="primary">
            평균 기온({weatherData[0].stnNm})
          </Typography>
          <Grid container spacing={3}>
            {weatherData.map((weather) => (
              <WeatherCard key={weather.tm} weatherData={weather}  />
            ))}
          </Grid>
        </>
      )}
    </>
  );
};

export default Content;
