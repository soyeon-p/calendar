import { Container } from '@material-ui/core';
import React from 'react';
import { useRecoilValue } from 'recoil';
import Content from '../Components/Weather/Content';
import Filter from '../Components/Weather/Filter';
import { submitFormState } from '../Recoil/atoms';

const Weather = () => {
  const submitForm = useRecoilValue(submitFormState);

  return (
    <Container>
      <Filter />
      {submitForm && <Content />}
    </Container>
  );
};

export default Weather;
