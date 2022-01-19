import { Container } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import Content from '../Components/Weather/Content';
import Filter from '../Components/Weather/Filter';
import { weatherDataState } from '../Recoil/atoms';

const Weather = () => {
  const [, setWeatherData] = useRecoilState(weatherDataState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data: {
            response: {
              body: {
                items: { item: weatherData },
              },
            },
          },
        } = await axios.get('http://localhost:3065/weather');
        setWeatherData(weatherData);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [setWeatherData]);

  return (
    <Container>
      <Filter />
      <Content />
    </Container>
  );
};

export default Weather;
