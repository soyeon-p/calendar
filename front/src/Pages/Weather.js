import { Container } from '@material-ui/core';
import React, { useEffect } from 'react';
import Content from '../Components/Weather/Content';
import Filter from '../Components/Weather/Filter';

const Weather = () => {

  useEffect(() => {
    
  }, []);

  return (
    <Container>
      <Filter />
      <Content />
    </Container>
  );
};

export default Weather;
