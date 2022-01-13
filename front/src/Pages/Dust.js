import { Container } from '@material-ui/core';
import React from 'react';
import axios from 'axios';

const fetchData = async () => {
  try {
    const {
      data: {
        response: {
          body: { items },
        },
      },
    } = await axios.get('http://localhost:3065/dust');
    const dustData = items[0];
    console.log(dustData);
  } catch (err) {
    console.error(err);
  }
};

const Dust = () => {
  fetchData();

  return <Container>Dust</Container>;
};

export default Dust;
