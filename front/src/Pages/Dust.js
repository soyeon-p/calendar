import { Container } from '@material-ui/core';
import React, { useEffect } from 'react';
import axios from 'axios';

const fetchData = async () => {
  try {
    const {
      data: {
        response: {
          body: { items: dustData },
        },
      },
    } = await axios.get('http://localhost:3065/dust');
    console.log(dustData);
  } catch (err) {
    console.error(err);
  }
};

const Dust = () => {
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <Container>
      Dust
    </Container>
  );
};

export default Dust;
