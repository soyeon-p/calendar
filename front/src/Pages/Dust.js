import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Filter from '../Components/Dust/Filter';
import Content from '../Components/Dust/Content';

/*
0 ~ 30 좋음
31 ~ 80 보통
81 ~ 150 나쁨
151이상 매우나쁨
*/

const Dust = () => {
  const [dustData, setDustData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data: {
            response: {
              body: { items: dustData },
            },
          },
        } = await axios.get('http://localhost:3065/dust');
        setDustData(dustData);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Filter dustData={dustData} />

      <Content dustData={dustData} />
    </Container>
  );
};

export default Dust;
