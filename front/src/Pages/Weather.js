import { Container } from '@material-ui/core';
import React from 'react';
import Content from '../Components/Weather/Content';
import Filter from '../Components/Weather/Filter';

const Weather = () => {

  return (
    <Container>
      <Filter />
      <Content />
    </Container>
  );
};

export default Weather;
