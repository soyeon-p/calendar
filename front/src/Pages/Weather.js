import { Container } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Filter from '../Components/Weather/Filter';

const Weather = () => {
  // const [weatherData, setWeatherData] = useState()
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get('http://localhost:3065/weather');
        console.log(data.data.response.body.items.item)
      } catch (err) {
        console.error(err);
      }
    };
    fetchData()
  }, [])
  
  // console.log(weatherData)
  
  
  
  return (
    <Container>
      <Filter />
    </Container>
  );
}

export default  Weather;